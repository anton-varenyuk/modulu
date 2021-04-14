import { Injectable } from '@angular/core';
import items from '../../../shared/constants/item-list.js';
import Item from '../../../shared/interfaces/item';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  public items: Item[];

  constructor() {
    this.items = items;
  }

  public getItems(): Item[] {
    return this.items;
  }

  public findItem(item: Item): Item {
    return this.getItems().find(element => element.id === item.id);
  }
}
