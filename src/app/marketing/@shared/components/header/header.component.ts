import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ViewProfileComponent } from '../../../view-profile/view-profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private data;
    product: string;
    cost: string;

    constructor(private modal: MatDialog) {}

    ngOnInit(): void {}

    viewProfile(): void {

        const dialogRef = this.modal.open(ViewProfileComponent, {
            width: '800px',
            height: '500px',

        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
    }

}
