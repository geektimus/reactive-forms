import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';


export class CustomValidators {
    static number(control: AbstractControl) {
        const regexp = /^\d+$/;
        const value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'invalidNumber': { value: control.value } } : null;
    }
}
