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

@NgModule({
    declarations: [AppComponent, BuyProductComponent],
    imports: [
        NbThemeModule.forRoot({ name: 'default' }),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        AuthModule,
        CoreModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
