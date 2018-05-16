import { AuthGuard } from './@core/auth-guard/auth.guard';
import {
    ExtraOptions,
    RouterModule,
    Routes,
    PreloadAllModules
} from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './@auth/login/login.component';
import { BuyProductComponent } from './user/buy-product.component';
const routes: Routes = [
    {
        path: 'marketing',
        loadChildren: './marketing/marketing.module#MarketingModule'
    },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'auth', component: LoginComponent },
    { path: 'register/:code', component: LoginComponent },
    { path: 'product/buy/:code', component: BuyProductComponent },
    { path: '', redirectTo: 'auth', pathMatch: 'prefix' },
    { path: '**', redirectTo: 'auth' }
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
