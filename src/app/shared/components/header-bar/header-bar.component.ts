import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  public switchLoggedInState(state: boolean): void {
    this.auth.switchLoggedInState(state);
  }

  public checkAuthState(): boolean {
    return this.auth.checkAuthState();
  }
}
