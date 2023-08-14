import { AbstractControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";

export function MatchingValidation(controlName: string, matchingControlName: string) {
  return (fg: FormGroup) => {
    const control = fg.controls[controlName];
    const matchingControl = fg.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['notmatched']) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ notmatched: true });
    }
    else {
      matchingControl.setErrors(null);
    }
  }
}

//For FormGroup Validation
export class MatchValidationClass {
  static Match(controls: AbstractControl): Validators | null {
    let control = controls.get("password");
    let matchingControl = controls.get("password");

    if (matchingControl?.errors && matchingControl?.errors['notmatched']) {
      return null;
    }

    if (control?.value !== matchingControl?.value) {
      matchingControl?.setErrors({ 'notmatched': true });
      return { 'notmatched': true }
    }
    else {
      return null;
    }
  }
}
