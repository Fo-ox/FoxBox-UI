import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'FoxBox-UI';
    public dis: boolean = true;

    click(event: any): void {
        console.log(event);
    }

    submit() {
        console.log('submit');
    }
}
