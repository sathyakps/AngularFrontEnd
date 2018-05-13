import { ViewProductDetailComponent } from './view-product-detail/view-product-detail.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
    constructor(private modal: MatDialog) {}

    ngOnInit(): void {}

    openProductDetail() {
        this.modal.open(ViewProductDetailComponent, {
            // width: 700,
            // height: 800
        });
    }
}
