import { AdminComponent } from './admin.component';
import { MaterialModule } from './../app.material';

import { SharedModule } from './@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
    declarations: [AdminComponent],
    imports: [AdminRoutingModule, MaterialModule, CommonModule, SharedModule],
    exports: [],
    providers: [],
    entryComponents: []
})
export class AdminModule {}
