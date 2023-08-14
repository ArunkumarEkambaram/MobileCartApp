import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

//Angular 15+
export const authGuard: CanActivateFn = (route, state) => {
  //return false;
  const userService = inject(UserService);
  return userService.isAuthenticated();
};

//Angular 10 to 14
export class AuthGuardService implements CanActivate {
  constructor(private userService:UserService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.userService.isAuthenticated();
  }
}
