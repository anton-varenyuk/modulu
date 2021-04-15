import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  authMode: string;

  constructor(private auth: AuthService) {
    this.authMode = 'signUp';
  }

  ngOnInit(): void {
  }
  public signUp(): void {
    this.auth.switchAuthState(true);
  }
  public switchAuthMode(mode: string): void {
    this.authMode = mode;
  }

}
