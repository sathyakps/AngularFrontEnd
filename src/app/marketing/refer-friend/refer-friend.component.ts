import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { REFER_URL } from 'src/app/app.config';

@Component({
    selector: 'app-refer-friend',
    templateUrl: './refer-friend.component.html',
    styleUrls: ['./refer-friend.component.css']
})
export class ReferFriendComponent implements OnInit {
    referURL = REFER_URL;
    constructor(
        public dialogRef: MatDialogRef<ReferFriendComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private modal: MatDialog
    ) {}

    ngOnInit(): void {}

    onClose(): void {
        this.dialogRef.close();
    }
}
