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
    constructor( public dialogRef: MatDialogRef <ViewProductDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private modal: MatDialog) {}

    ngOnInit(): void {
    }

    onClose(): void {
        this.dialogRef.close();
      }

      generateReferral(): void {

           this.modal.open(GenerateReferalComponent, {
                width: '600px',
                height: '500px',

            });

      }
}
