import { DataService } from './../../../@core/services/data.service';
import { UserService } from './../../../@core/services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { GenerateReferalComponent } from '../../generate-Referal/generate-Referal.component';

@Component({
    selector: 'app-view-product-detail',
    templateUrl: './view-product-detail.component.html',
    styleUrls: ['./view-product-detail.component.scss']
})
export class ViewProductDetailComponent implements OnInit {
    discountForm: FormGroup;
    showDiscount = false;
    userData;
    constructor(
        public dialogRef: MatDialogRef<ViewProductDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private modal: MatDialog,
        public userService: UserService,
        public dataservice: DataService,
        private snack: MatSnackBar
    ) {
        this.dataservice.loggedInUser.subscribe(dataa => {
            if (dataa) {
                this.userData = dataa;
            }
        });
    }

    ngOnInit(): void {
        this.discountForm = new FormGroup({
            productId: new FormControl(this.data['_id']),
            discount: new FormControl(null, [
                Validators.required,
                Validators.min(0),
                Validators.max(this.data['maximumDiscount'])
            ])
        });
    }

    onClose(): void {
        this.dialogRef.close();
    }

    generateReferral(): void {
        console.log(this.discountForm.value)
        this.userService.generateProductCoupon(this.discountForm.value, this.userData['email']).subscribe(data => {
            this.dialogRef.close();
            if (data['success'] && data['data']) {
                this.modal.open(GenerateReferalComponent, {
                    width: '600px',
                    height: '430px',
                    data: data['data']
                });
            } else {
                this.snack.open('Failed To create Coupon.' , 'Try Again', {duration : 5000})
            }
        });
    }
}
