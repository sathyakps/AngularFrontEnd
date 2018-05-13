import { MaterialModule } from './../app.material';
import { ViewProductDetailComponent } from './view-products/view-product-detail/view-product-detail.component';
import { SliderComponent } from './slider/slider.component';
import { SharedModule } from './@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingComponent } from './marketing.component';
import { MarketingRoutingModule } from './marketing.routing.module';
import { ViewProductComponent } from './view-products/view-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewProfileComponent } from './view-profile/view-profile.component';
@NgModule({
    declarations: [
        ViewProfileComponent,
        MarketingComponent,
        SliderComponent,
        ViewProductComponent,
        ViewProductDetailComponent
    ],
    imports: [MaterialModule, CommonModule, MarketingRoutingModule, SharedModule],
    exports: [],
    providers: [],
    entryComponents: [ViewProductDetailComponent]
})
export class MarketingModule {}
