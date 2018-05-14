import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-generate-referal',
    templateUrl: './generate-referal.component.html',
    styleUrls: ['./generate-referal.component.css']
})
export class GenerateReferalComponent implements OnInit {

    constructor( public dialogRef: MatDialogRef <GenerateReferalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private modal: MatDialog) {}

    ngOnInit(): void {
    }

    onClose(): void {
        this.dialogRef.close();
      }

}
