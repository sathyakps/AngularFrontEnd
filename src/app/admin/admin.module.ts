import { AdminComponent } from './admin.component';
import { MaterialModule } from './../app.material';

import { SharedModule } from './@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin.routing.module';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ConfirmationDialogComponent } from 'src/app/admin/confirmation-dialog/confirmation-dialog.component';

@NgModule({
    declarations: [AdminComponent, DashboardComponentComponent, AddProductComponent, ViewProductComponent, ConfirmationDialogComponent],
    imports: [AdminRoutingModule, MaterialModule, CommonModule, SharedModule, Ng2SmartTableModule],
    exports: [],
    providers: [],
    entryComponents: []
})
export class AdminModule {}
