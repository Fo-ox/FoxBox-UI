import { NgModule } from '@angular/core';
import { FoxButtonComponent } from "./button.component";
import { CommonModule } from "@angular/common";
import { LoaderModule } from "../loader/loader.module";

@NgModule({
    imports: [
        CommonModule,
        LoaderModule
    ],
    declarations: [
        FoxButtonComponent
    ],
    exports: [
        FoxButtonComponent
    ]
})
export class FoxButtonModule { }
