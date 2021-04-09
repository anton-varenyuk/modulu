import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public switchLoggedInState(state: boolean): void {
    if (state) {
      window.localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['home']);
      console.log('logged in');
    } else {
      window.localStorage.removeItem('loggedIn');
      this.router.navigate(['registration']);
      console.log('logged out');
    }
  }

  public checkAuthState(): boolean {
    return !!window.localStorage.getItem('loggedIn');
  }
}
