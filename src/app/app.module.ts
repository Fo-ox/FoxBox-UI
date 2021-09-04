import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoxBoxUiModule } from 'fox-box-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FoxBoxUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
