import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MarketingComponent } from './marketing.component';
import { UserAnalyticsComponent } from './analytics/analytics.component';
const routes: Routes = [
    { path: '', component: MarketingComponent },
    { path: 'analytics', component: UserAnalyticsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketingRoutingModule {}
