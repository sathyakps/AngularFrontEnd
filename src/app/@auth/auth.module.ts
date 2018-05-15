import { CoreModule } from './../@core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.material';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule, CoreModule],
    exports: [],
    providers: []
})
export class AuthModule {}
