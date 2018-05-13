import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LoginComponent, SignUpComponent],
    imports: [CommonModule],
    exports: [],
    providers: []
})
export class AuthModule {}
