import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';


export class CustomValidators {
    static number(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const regexp = /^\d+$/;
            const value = control.value;
            console.log('Checking the value of: ', value);
            if (value === '') {
                return null;
            }
            return !regexp.test(value) ? { 'invalidNumber': { value: control.value } } : null;
        };
    }
}
