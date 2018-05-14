import { ProductService } from './../../@core/services/product.service';
import { ViewProductDetailComponent } from './view-product-detail/view-product-detail.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
    public allProducts;

    constructor(private modal: MatDialog, private productService: ProductService) {
        this.productService.getAllProduct().subscribe(data => {
            if (data['success']) {
                this.allProducts = data['data'];
            }
        });
    }

    ngOnInit(): void {}

    openProductDetail(): void {
        const dialogRef = this.modal.open(ViewProductDetailComponent, {
            width: '950px',
            height: '700px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
