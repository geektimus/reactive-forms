import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-person-detail',
    templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent {
    name = new FormControl();
}
