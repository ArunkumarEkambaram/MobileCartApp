import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted: boolean = false;
  mobileNoRegex: string = "^[0-9]*$";
  emailRegex: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(null, Validators.required),
      gender: new FormControl('Female'),
      contactNo: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.mobileNoRegex)]),
      emailId: new FormControl(null, [Validators.required, Validators.pattern(this.emailRegex)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
      confirmPassword: new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm);
    console.log(this.getControl('firstName'));
    console.log(this.f['firstName']);
  }

  getControl(controlName: string): AbstractControl {
    return this.registerForm.controls[controlName];
  }


  get f(): { [controlName: string]: AbstractControl } {
    return this.registerForm.controls;
  }

}
