import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isValidUser: boolean = false;

  login(userName: string) {
    sessionStorage.setItem("currentUser", userName);
    this.isValidUser = true;
  }

  logout() {
    if (sessionStorage.getItem("currentUser")) {
      sessionStorage.clear();
      this.isValidUser = false;
    }
  }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem("currentUser")) {
      return this.isValidUser;
    }
    return false;
  }
}
