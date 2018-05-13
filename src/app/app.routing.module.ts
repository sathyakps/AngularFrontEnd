import { SignUpComponent } from './@auth/signup/signup.component';
import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './@auth/login/login.component';
import { BuyProductComponent } from './user/buy-product.component';
const routes: Routes = [
    { path: 'marketing', loadChildren: './marketing/marketing.module#MarketingModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'buy', component: BuyProductComponent },
    { path: '', redirectTo: 'marketing', pathMatch: 'prefix' },
    { path: '**', redirectTo: 'marketing' }
];

const config: ExtraOptions = {
    useHash: false,
    preloadingStrategy: PreloadAllModules
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
