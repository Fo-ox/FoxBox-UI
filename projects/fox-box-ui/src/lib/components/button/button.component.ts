import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
    selector: 'fox-button',
    templateUrl: 'button.template.html',
    styleUrls: ['button.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoxButtonComponent {

}
