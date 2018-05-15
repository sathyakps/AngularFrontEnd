import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/admin/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {
    settings = {
        delete: {
          deleteButtonContent: '<i class="fa fa-trash-o"></i>',
          confirmDelete: true,
        },
        edit: {
          editButtonContent: '<i class="fa fa-pencil-square"></i>',
          confirmSave: true,
        },
        columns: {
         name: {
            title: 'Name',
          },
          price: {
            title: 'Price',
          },
          brand: {
            title: 'Brand',
          },
          discount: {
            title: 'maximumDiscount',
          },
          description: {
            title: 'Description',
          },
          image: {
            title: 'Image URL',
          },
        },
         attr: {
            class: 'table table-bordered',
          },
          noDataMessage: 'No Users Found',
          pager: {
              perPage: 9
          },
          mode: 'external',
          actions: {
              add: false,
              position: 'right'
          },
      };
      data = [
        {
          name: 1,
          price: 'Leanne Graham',
          brand: 'Bret',
          discount: 'Sincere@april.biz',
          description: true,
          image: 'http://laptop.com',
        },
        {
            name: 1,
            price: 'Leanne Graham',
            brand: 'Bret',
            discount: 'Sincere@april.biz',
            description: true,
            image: 'http://laptop.com',
        },
        {
            name: 1,
            price: 'Leanne Graham',
            brand: 'Bret',
            discount: 'Sincere@april.biz',
            description: true,
            image: 'http://laptop.com',
        },
        {
            name: 1,
            price: 'Leanne Graham',
            brand: 'Bret',
            discount: 'Sincere@april.biz',
            description: true,
            image: 'http://laptop.com',
        },
        {
            name: 1,
            price: 'Leanne Graham',
            brand: 'Bret',
            discount: 'Sincere@april.biz',
            description: true,
            image: 'http://laptop.com',
        }
      ];
      source: LocalDataSource;
      constructor(public dialog: MatDialog) {
        this.source = new LocalDataSource(this.data);
      }
      onDeleteConfirm(event) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '400px',
            data: {
                name: 'Product',
                text: "Deleting will remove the product and all its details. This action can't be reversed",
                action: 'Delete'
            },
        });
      }
      onSaveConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
          event.newData['name'] += ' + added in code';
          event.confirm.resolve(event.newData);
        } else {
          event.confirm.reject();
        }
      }
      onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
          event.newData['name'] += ' + added in code';
          event.confirm.resolve(event.newData);
        } else {
          event.confirm.reject();
        }
      }
}
