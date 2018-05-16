import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { ProductService } from '../../@core/services/product.service';
import * as _ from 'lodash';
@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
    tvForm: FormGroup;
    laptopForm: FormGroup;
    mobileForm: FormGroup;
    sentBackData = new EventEmitter();
    constructor(
        public dialogRef: MatDialogRef<EditProductComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private modal: MatDialog,
        private productService: ProductService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.tvForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            price: new FormControl(null, Validators.required),
            brand: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            imageURL: new FormControl(null, Validators.required),
            maximumDiscount: new FormControl(null, Validators.required),
            adminId: new FormControl(this.data['user']['email'], Validators.required),
            screenSize: new FormControl(null, Validators.required),
            screenType: new FormControl(null, Validators.required),
            smartTv: new FormControl(null, Validators.required),
            speakerOutput: new FormControl(null, Validators.required)
        });

        this.laptopForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            price: new FormControl(null, Validators.required),
            brand: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            imageURL: new FormControl(null, Validators.required),
            maximumDiscount: new FormControl(null, Validators.required),
            adminId: new FormControl(this.data['email'], Validators.required),
            processor: new FormControl(null, Validators.required),
            RAM: new FormControl(null, Validators.required),
            OS: new FormControl(null, Validators.required),
            storage: new FormControl(null, Validators.required),
            displaySize: new FormControl(null, Validators.required)
        });
        this.mobileForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            price: new FormControl(null, Validators.required),
            brand: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            imageURL: new FormControl(null, Validators.required),
            maximumDiscount: new FormControl(null, Validators.required),
            adminId: new FormControl(this.data['email'], Validators.required),
            screenSize: new FormControl(null, Validators.required),
            RAM: new FormControl(null, Validators.required),
            battery: new FormControl(null, Validators.required),
            noOfSIM: new FormControl(null, Validators.required),
            memory: new FormControl(null, Validators.required)
        });
        if (this.data['product']['categoryName'] === 'LAPTOP') {
            this.laptopForm.patchValue(this.data['product']);
        } else if (this.data['product']['categoryName'] === 'TV') {
            this.tvForm.patchValue(this.data['product']);
        } else {
            this.mobileForm.patchValue(this.data['product']);
        }
    }

    updateLaptop() {
        const result = Object.keys(this.laptopForm.getRawValue());
        let finalObject = {};
        result.forEach(elem => {
            if (this.laptopForm.getRawValue()[elem] !== this.data['product'][elem]) {
                finalObject[elem] = this.laptopForm.getRawValue()[elem];
            }
        });
        finalObject = _.pickBy(finalObject, _.identity);
        this.productService.editProduct(this.data['product']['_id'], finalObject).subscribe(
            data => {
                if (data['success']) {
                    this.snackBar.open('Product updated Successfully', 'ok', { duration: 5000 });
                    this.sentBackData.emit(data['data']);
                    this.dialogRef.close();
                }
            },
            err => {
                this.snackBar.open('Failed updating product', 'Try Again', { duration: 5000 });
            }
        );
    }

    updateMobile() {
        const result = Object.keys(this.mobileForm.getRawValue());
        let finalObject = {};
        result.forEach(elem => {
            if (this.mobileForm.getRawValue()[elem] !== this.data['product'][elem]) {
                finalObject[elem] = this.mobileForm.getRawValue()[elem];
            }
        });
        finalObject = _.pickBy(finalObject, _.identity);

        this.productService.editProduct(this.data['product']['_id'], finalObject).subscribe(
            data => {
                if (data['success']) {
                    this.snackBar.open('Product updated Successfully', 'ok', { duration: 5000 });
                    this.sentBackData.emit(data['data']);
                    this.dialogRef.close();
                }
            },
            err => {
                this.snackBar.open('Failed updating product', 'Try Again', { duration: 5000 });
            }
        );
    }

    updateTV() {
        const result = Object.keys(this.tvForm.getRawValue());
        let finalObject = {};
        result.forEach(elem => {
            if (this.tvForm.getRawValue()[elem] !== this.data['product'][elem]) {
                finalObject[elem] = this.tvForm.getRawValue()[elem];
            }
        });
        finalObject = _.pickBy(finalObject, _.identity);
        this.productService.editProduct(this.data['product']['_id'], finalObject).subscribe(
            data => {
                if (data['success']) {
                    this.snackBar.open('Product updated Successfully', 'ok', { duration: 5000 });
                    this.sentBackData.emit(data['data']);
                    this.dialogRef.close();
                }
            },
            err => {
                this.snackBar.open('Failed updating product', 'Try Again', { duration: 5000 });
            }
        );
    }
}
