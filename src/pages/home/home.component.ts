import {Component} from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    standalone: true,
})
export class HomepageComponent {
    getCompanyName() {
        switch (window.location.origin) {
            case 'https://atomstudios.fr':
                return 'ATOM Studios';
            case 'https://atomservices.fr':
                return 'ATOM Services';
            default:
                return 'ATOM Studios';
        }
    }
}
