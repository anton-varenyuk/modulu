import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router) {
  }

  canActivate(): boolean {
    return this.isLoggedOut();
  }

  canLoad(): boolean {
    return this.isLoggedOut();
  }

  isLoggedOut(): boolean {
    const token = this.auth.checkAuthState();
    if (!token) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}
