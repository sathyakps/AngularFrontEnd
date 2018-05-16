import { MaterialModule } from './app.material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './@auth/auth.module';
import { BuyProductComponent } from './user/buy-product.component';
import { CoreModule } from './@core/core.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
@NgModule({
    declarations: [AppComponent, BuyProductComponent],
    imports: [
        NbThemeModule.forRoot({ name: 'default' }),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        AuthModule,
        ReactiveFormsModule,
        CoreModule.forRoot(),
        Ng2GoogleChartsModule,
        LoadingBarRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
