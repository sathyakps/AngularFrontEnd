import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    exports: [
        CdkTableModule,
        MatDialogModule,
        MatInputModule,
        MatRadioModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatTooltipModule
    ]
})
export class MaterialModule {}
