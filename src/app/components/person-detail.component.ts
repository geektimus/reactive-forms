import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-person-detail',
    templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent {
    personForm = new FormGroup({
        name: new FormControl(),
        mail: new FormControl(),
        phone: new FormControl()
    });
}
