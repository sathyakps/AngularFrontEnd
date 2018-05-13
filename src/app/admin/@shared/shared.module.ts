import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PIPES } from './pipes/pipes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_COMPONENTS } from './components/components';

/**
 * Shared module that you can import everywhere, because it haven't providers.
 * It contains navbar, page-header and so on.
 */
@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    exports: [PIPES, SHARED_COMPONENTS],
    declarations: [PIPES, SHARED_COMPONENTS],
    entryComponents: [],
    providers: []
})
export class SharedModule {}
