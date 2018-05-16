import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../@core/services/user.service';
import * as _ from 'lodash';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
@Component({
    selector: 'app-buy-product',
    templateUrl: './buy-product.component.html',
    styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {
    referCode;
    referCodeDetails;
    data;
    userData;
    transactionForm: FormGroup;
    constructor(
        private param: ActivatedRoute,
        private userService: UserService,
        private snackBar: MatSnackBar,
        private router: Router
    ) {
        this.param.params.subscribe(params => {
            this.referCode = params['code'];
            this.getCodeDetails();
        });
    }

    getCodeDetails() {
        this.userService.getCouponDetails(this.referCode).subscribe(data => {
            if (data['success']) {
                this.userData = data['data']['email'];
                this.referCodeDetails = _.find(data['data']['productCodes'], {
                    referCode: this.referCode
                });
                this.getProductDetails();
            }
        });
    }

    getProductDetails() {
        this.userService.getProducts().subscribe(data => {
            if (data['success']) {
                this.data = _.find(data['data'], {
                    _id: this.referCodeDetails['productId']
                });
                this.loadForm();
            }
        });
    }

    ngOnInit(): void {}

    loadForm() {
        this.transactionForm = new FormGroup({
            productQty: new FormControl(1, Validators.required),
            productId: new FormControl(this.data['_id'], Validators.required),
            referEmail: new FormControl(this.userData, Validators.required),
            totalAmount: new FormControl(this.data['price'], Validators.required),
            buyerDetails: new FormGroup(
                {
                    name: new FormControl(null),
                    mobile: new FormControl(null),
                    address: new FormControl(null)
                },
                Validators.required
            ),
            maxDiscount: new FormControl(this.data['maximumDiscount'], Validators.required),
            appliedDiscount: new FormControl(this.referCodeDetails['discount'], Validators.required)
        });
        this.transactionForm.get('productQty').valueChanges.subscribe(data => {
            if (data > 0) {
                this.transactionForm.get('totalAmount').setValue(this.data['price'] * data);
            }
        });
    }

    makeTransaction() {
        this.userService.makeTransaction(this.transactionForm.value, this.referCode).subscribe(data => {
            if (data['success']) {
                this.snackBar.open('Transaction Successfull', 'ok', { duration: 5000 });
                this.router.navigate(['/auth']);
            } else {
                this.snackBar.open('Transaction Unsuccessfull', 'ok', { duration: 5000 });
            }
        });
    }
}
