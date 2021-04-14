import { Injectable } from '@angular/core';
import items from '../../../helpers/utility/item-list.js';
import Item from '../../../helpers/utility/item';

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
}
