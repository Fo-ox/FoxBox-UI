import { NgModule } from '@angular/core';
import { FoxButtonComponent } from "./button.component";
import { CommonModule } from "@angular/common";
import { FoxLoaderModule } from "../loader/loader.module";

@NgModule({
    imports: [
        CommonModule,
        FoxLoaderModule
    ],
    declarations: [
        FoxButtonComponent
    ],
    exports: [
        FoxButtonComponent
    ]
})
export class FoxButtonModule { }
