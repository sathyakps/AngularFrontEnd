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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAnalyticsComponent } from './admin-analytics/admin-analytics.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
    declarations: [
        AdminAnalyticsComponent,
        AdminComponent,
        DashboardComponentComponent,
        AddProductComponent,
        ViewProductComponent,
        ConfirmationDialogComponent,
        EditProductComponent
    ],
    imports: [
        Ng2GoogleChartsModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        MaterialModule,
        CommonModule,
        SharedModule,
        Ng2SmartTableModule
    ],
    exports: [],
    providers: [],
    entryComponents: [AddProductComponent, ConfirmationDialogComponent, EditProductComponent]
})
export class AdminModule {}
