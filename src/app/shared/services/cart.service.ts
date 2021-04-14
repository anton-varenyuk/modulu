import { Injectable } from '@angular/core';
import Item from '../../helpers/utility/item';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  public itemList: Item[];

  constructor() {
    this.itemList = [];
  }

  public addItem(item: Item): void {
    this.itemList.push(item);
  }

  public removeItem(item: Item): void {
    const index = this.itemList.indexOf(item);
    if (index > -1) {
      this.itemList.splice(index, 1);
    }
  }

  public getItems(): Item[] {
    return this.itemList;
  }
}
