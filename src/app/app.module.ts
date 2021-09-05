import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoxButtonModule, FoxTextureModule } from '@fo-ox/fox-box-ui';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FoxButtonModule,
        FoxTextureModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
