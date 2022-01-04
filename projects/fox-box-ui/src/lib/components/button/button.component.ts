import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    Output
} from "@angular/core";
import { FoxElementState, FoxLoaderTypes } from "../../models/models";

@Component({
    selector: 'button[fox-button], a[fox-button]',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoxButtonComponent {
    /** @internal */
    public _state: FoxElementState = { loading: false, disable: false };

    @Input() set loading(loading: boolean) {
        this._state = {...this._state, loading: loading}
    };

    @Input() set disable(disable: boolean) {
        this._state = {...this._state, disable: disable}
    };

    @Input() loaderType: FoxLoaderTypes;
    @Input() loaderColor: string;

    @Output() onClick: EventEmitter<FoxElementState> = new EventEmitter();
    @Output() onSubmit: EventEmitter<void> = new EventEmitter();

    @HostBinding('class._disable')
    get getDisable(): boolean {
        return this._state.disable;
    }

    @HostListener('tap')
    @HostListener('click')
    click(): void {
        this.onClick.emit(this._state)
        !this._state.disable && !this._state.loading && this.onSubmit.emit();
    }
}
