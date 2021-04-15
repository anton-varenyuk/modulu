import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../shared/services/cart.service';
import Item from '../../../shared/interfaces/item';

@Component({
  selector: 'app-cart',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: Item[];
  orderTotal: number;

  constructor(private cart: CartService) {
    this.orderTotal = 0;
  }

  ngOnInit(): void {
    this.items = this.cart.getItems();
    this.orderTotal = this.getOrderTotal();
  }

  public getOrderTotal(): number {
    let sum = 0;
    for (const item of this.items) {
      sum += item.price;
    }
    return sum;
  }

}
