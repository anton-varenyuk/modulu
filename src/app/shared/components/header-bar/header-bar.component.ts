import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import Item from '../../interfaces/item';


@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  items: Item[];

  constructor(private auth: AuthService,
              private cart: CartService) {

    this.items = this.cart.getItems();
  }

  ngOnInit(): void {
  }

  public switchAuthState(state: boolean): void {
    this.auth.switchAuthState(state);
  }

  public checkAuthState(): boolean {
    return this.auth.checkAuthState();
  }
}
