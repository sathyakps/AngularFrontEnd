import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { REFER_URL } from 'src/app/app.config';


@Component({
    selector: 'app-generate-referal',
    templateUrl: './generate-referal.component.html',
    styleUrls: ['./generate-referal.component.css']
})
export class GenerateReferalComponent implements OnInit {
    referURL = REFER_URL;
    constructor( public dialogRef: MatDialogRef <GenerateReferalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private modal: MatDialog) {}

    ngOnInit(): void {
        console.log(this.referURL);
    }

    onClose(): void {
        this.dialogRef.close();
      }

}
