import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

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

  constructor(private userService: UserService) { }

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
    //console.log(loginForm.value);
    //console.log(loginForm.controls["txtUserName"].value);
    this.userService.login(loginForm.control.get("txtUserName")?.value);
  }
}
