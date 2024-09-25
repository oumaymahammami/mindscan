import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor(private authService: LocalStorageService, private router: Router) {

  }
 
  canActivate(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    console.log("Auth Key::"+ this.authService.get('auth-key'));

    if (this.authService.get('auth-key')) {
      return true;
    } else {
      // Redirect to the login page if the user is not 
      this.router.navigate(['/login']);
      return false;
    }
  }

};
