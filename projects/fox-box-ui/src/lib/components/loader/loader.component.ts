import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';
import { FoxLoaderTypes } from "../../models/models";

@Component({
    selector: 'fox-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
    @Input() show: boolean = true;
    @Input() type: FoxLoaderTypes;
    @Input() color: string;
    @Input() size: string;
}
