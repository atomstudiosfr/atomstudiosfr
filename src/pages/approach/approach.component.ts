import {Component} from '@angular/core';
import {AsyncPipe, NgFor} from '@angular/common';

@Component({
    templateUrl: './approach.component.html',
    standalone: true,
    imports: [AsyncPipe, NgFor],
})
export class ApproachComponent {
}
