import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';


export class CustomValidators {
    static number(control: AbstractControl) {
        const value = control.value;
        if (value === '') {
            return null;
        }
        return !isNaN(parseFloat(value)) && isFinite(value) ? null : { 'invalidNumber': { value: control.value } };
    }
}
