import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router) {
  }

  canActivate(): boolean {
    return this.isLoggedIn();
  }

  canLoad(): boolean {
    return this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    const token = this.auth.checkAuthState();
    if (token) {
      return true;
    }

    this.router.navigate(['/registration']);
    return false;
  }

}

