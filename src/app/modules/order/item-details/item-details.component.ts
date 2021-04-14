import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import Item from '../../../shared/interfaces/item';
import { CartService } from '../../../shared/services/cart.service';
import { ItemsService } from '../services/items.service';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})

export class ItemDetailsComponent implements OnInit {
  item: Item;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private items: ItemsService,
              private cart: CartService) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => this.router.getCurrentNavigation().extras.state)
    ).subscribe(data => {
      this.item = data as Item;
    });
  }

  public addToCart(): void {
    this.items.findItem(this.item).inCart = true;
    this.cart.addItem(this.item);
    console.log(this.cart.getItems());
  }

  public removeFromCart(): void {
    this.items.findItem(this.item).inCart = false;
    this.cart.removeItem(this.item);
    console.log('item: ', this.item);
    console.log(this.cart.getItems());
  }
}
