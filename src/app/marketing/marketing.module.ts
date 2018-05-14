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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { GenerateReferalComponent } from './generate-Referal/generate-Referal.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { ShareButtonsModule } from 'ngx-sharebuttons';
@NgModule({
    declarations: [
        ViewProfileComponent,
        MarketingComponent,
        SliderComponent,
        ViewProductComponent,
        ViewProductDetailComponent,
        GenerateReferalComponent,
        ReferFriendComponent
    ],
    imports: [
        ShareButtonsModule.forRoot(),
        MaterialModule,
        CommonModule,
        MarketingRoutingModule,
        SharedModule,
        NgbModule.forRoot()
    ],
    exports: [],
    providers: [],
    entryComponents: [ViewProductDetailComponent, GenerateReferalComponent, ReferFriendComponent]
})
export class MarketingModule {}
