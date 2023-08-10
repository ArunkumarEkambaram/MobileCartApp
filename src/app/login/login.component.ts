import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  userType: string = '';

  isValid: boolean = false;
  isInvalid: boolean = false;

  userData: any[] = [
    { userName: "arun", password: "arun@123" },
    { userName: "pradeep", password: "pra@123" },
    { userName: "senthil", password: "sen@123" },
    { userName: "vendhan", password: "ven@123" },
  ]

  // signIn() {
  //   this.isValid = this.isInvalid = false;
  //   for (let v of this.userData) {
  //     if (v.userName == this.userName && v.password == this.password) {
  //       this.isValid = true;
  //       break;
  //     }
  //     else {
  //       this.isInvalid = true;
  //     }
  //   }
  // }

  signIn(loginForm: NgForm) {
    console.log(loginForm.value);
  }
}
