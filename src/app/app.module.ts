import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoxButtonModule } from "fox-box-ui";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FoxButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
