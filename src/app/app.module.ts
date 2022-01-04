import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoxButtonModule, FoxLoaderModule } from '@fo-ox/fox-box-ui';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FoxButtonModule,
        FoxLoaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
