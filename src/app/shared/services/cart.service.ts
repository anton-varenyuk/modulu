import { Injectable } from '@angular/core';
import Item from '../interfaces/item';
import {ItemsService} from '../../modules/order/services/items.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  public itemList: Item[];

  constructor(private items: ItemsService) {
    this.itemList = [];
  }

  public addItem(item: Item): void {
    this.itemList.push(item);
  }

  public removeItem(item: Item): void {
    const index = this.itemList.indexOf(this.items.findItem(item));
    if (index > -1) {
      this.itemList.splice(index, 1);
    }
  }

  public getItems(): Item[] {
    return this.itemList;
  }
}
