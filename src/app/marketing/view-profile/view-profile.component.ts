import { DataService } from './../../@core/services/data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReferFriendComponent } from '../refer-friend/refer-friend.component';
import { UserService } from '../../@core/services/user.service';
import * as _ from 'lodash';
@Component({
    selector: 'app-view-profile',
    templateUrl: './view-profile.component.html',
    styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
    userData;
    fullUserData;
    directReferrals;
    indirectReferals2;
    indirectReferals1;

    constructor(
        private userService: UserService,
        private dataService: DataService,
        public dialogRef: MatDialogRef<ViewProfileComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private modal: MatDialog
    ) {}

    ngOnInit(): void {
        this.dataService.loggedInUser.subscribe(data => {
            if (data) {
                this.userData = data;
                this.getUserProfile();
            }
        });
    }

    getUserProfile() {
        this.userService.getProfile(this.userData['email']).subscribe(data => {
            if (data['success']) {
                this.fullUserData = data['data'][0];
                const groupBy = _.groupBy(this.fullUserData['referralUsers'], refer => {
                    return refer['friendLevel'];
                });
                this.directReferrals = groupBy[0] ? groupBy[0].length : 0;
                this.indirectReferals1 = groupBy[1] ? groupBy[1].length : 0;
                this.indirectReferals2 = groupBy[2] ? groupBy[2].length : 0;
            }
        });
    }

    onClose(): void {
        this.dialogRef.close();
    }

    referUser(): void {
        this.dialogRef.close();
        this.modal.open(ReferFriendComponent, {
            width: '600px',
            height: '420px',
            data: this.userData
        });
    }

    logout() {

        this.dialogRef.close();
        this.userService.logout();
        setTimeout(() => {
            location.reload()
        }, 500);

    }
}
