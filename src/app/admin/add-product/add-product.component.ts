import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { ProductService } from '../../@core/services/product.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    tvForm: FormGroup;
    laptopForm: FormGroup;
    mobileForm: FormGroup;
    sentBackData = new EventEmitter();
    type;
    constructor(
        public dialogRef: MatDialogRef<AddProductComponent>,
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
            adminId: new FormControl(this.data['email'], Validators.required),
            screenSize: new FormControl(null, Validators.required),
            screenType: new FormControl(null, Validators.required),
            smartTv: new FormControl(null, Validators.required),
            speakerOutput: new FormControl(null, Validators.required),
            type: new FormControl('TV')
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
            displaySize: new FormControl(null, Validators.required),
            type: new FormControl('LAPTOP')
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
            memory: new FormControl(null, Validators.required),
            type: new FormControl('MOBILE')
        });
    }

    addLaptop() {
        this.productService.addProducts(this.laptopForm.value).subscribe(
            data => {
                if (data['success']) {
                    this.snackBar.open('Product Added Successfully', 'ok', { duration: 5000 });
                    this.sentBackData.emit(data['data']);
                    this.dialogRef.close();
                }
            },
            err => {
                this.snackBar.open('Failed Adding product', 'Try Again', { duration: 5000 });
            }
        );
    }

    addMobile() {
        this.productService.addProducts(this.mobileForm.value).subscribe(
            data => {
                if (data['success']) {
                    this.snackBar.open('Product Added Successfully', 'ok', { duration: 5000 });
                    this.sentBackData.emit(data['data']);
                    this.dialogRef.close();
                }
            },
            err => {
                this.snackBar.open('Failed Adding product', 'Try Again', { duration: 5000 });
            }
        );
    }

    addTV() {
        this.productService.addProducts(this.tvForm.value).subscribe(
            data => {
                if (data['success']) {
                    this.snackBar.open('Product Added Successfully', 'ok', { duration: 5000 });
                    this.sentBackData.emit(data['data']);
                    this.dialogRef.close();
                }
            },
            err => {
                this.snackBar.open('Failed Adding product', 'Try Again', { duration: 5000 });
            }
        );
    }
}
