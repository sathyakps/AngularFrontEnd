import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { UserAnalyticsComponent } from '../marketing/analytics/analytics.component';
import { AdminAnalyticsComponent } from './admin-analytics/admin-analytics.component';
const routes: Routes = [
    { path: '',
    component: AdminComponent,
    children : [
        {path : 'view-products' , component : ViewProductComponent},
        { path: 'dashboard' , component : DashboardComponentComponent},
        {path: 'analytics', component : AdminAnalyticsComponent},
        { path: '', redirectTo : 'dashboard', pathMatch : 'full'}
    ]
},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
