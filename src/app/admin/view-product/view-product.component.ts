import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/admin/confirmation-dialog/confirmation-dialog.component';
import { ProductService } from '../../@core/services/product.service';
import { DataService } from '../../@core/services/data.service';
import { AddProductComponent } from '../add-product/add-product.component';
import * as _ from 'lodash';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
    selector: 'app-view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {
    userData = {};
    allProducts = [];
    settings = {
        mode: 'external',
        actions: {
            add: false,
            edit: true,
            delete: true,
            position: 'right'
        },
        delete: {
            deleteButtonContent: '<i class="fa fa-trash-o"></i>',
            confirmDelete: false
        },
        edit: {
            editButtonContent: '<i class="fa fa-pencil-square"></i>',
            confirmSave: false
        },
        columns: {
            name: {
                title: 'Name'
            },
            price: {
                title: 'Price'
            },
            brand: {
                title: 'Brand'
            },
            maximumDiscount: {
                title: 'Discount'
            },
            description: {
                title: 'Description'
            }
        },
        attr: {
            class: 'table table-bordered'
        },
        noDataMessage: 'No Products Found',
        pager: {
            perPage: 9
        }
    };

    source: LocalDataSource = new LocalDataSource();
    constructor(
        public dialog: MatDialog,
        private snackbar: MatSnackBar,
        private productService: ProductService,
        private dataService: DataService
    ) {
        this.dataService.loggedInUser.subscribe(data => {
            if (data) {
                this.userData = data;
                this.getProductDetail();
            }
        });
    }

    getProductDetail() {
        this.productService.getProductOfAdmin(this.userData['email']).subscribe(data => {
            if (data['success']) {
                this.allProducts = data['data'];
                this.source.load(this.allProducts);
            }
        });
    }
    onDeleteConfirm(event) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '400px',
            data: {
                name: 'Product',
                text: "Deleting will remove the product and all its details. This action can't be reversed",
                action: 'Delete'
            }
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.productService.deactivateProduct(event['data']['_id']).subscribe(dataa => {
                    if (dataa['success']) {
                        this.snackbar.open('Product Deleted Successfully', 'ok', { duration: 5000 });
                        const updatedProduct = _.findIndex(this.allProducts, { _id: event['data']['_id'] });
                        this.allProducts.splice(updatedProduct, 1);
                        this.source.load(this.allProducts);
                    }
                });
            }
        });
    }

    addProduct() {
        const dialogRef = this.dialog.open(AddProductComponent, {
            width: '600px',
            height: '400px',
            data: this.userData
        });

        dialogRef.componentInstance.sentBackData.subscribe(data => {
            if (data) {
                this.allProducts.push(data);
                this.source.load(this.allProducts);
            }
        });
    }

    editProduct(event) {
        const dialogRef = this.dialog.open(EditProductComponent, {
            width: '600px',
            height: '400px',
            data: { user: _.cloneDeep(this.userData), product: event['data'] }
        });
        dialogRef.componentInstance.sentBackData.subscribe(data => {
            if (data) {
                const updatedProduct = _.findIndex(this.allProducts, { _id: data['_id'] });
                this.allProducts[updatedProduct] = data;
                this.source.load(this.allProducts);
            }
        });
    }
}
