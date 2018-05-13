import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MarketingComponent } from './marketing.component';
const routes: Routes = [{ path: '', component: MarketingComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketingRoutingModule {}
