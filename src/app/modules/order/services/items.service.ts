import { Injectable } from '@angular/core';
import items from 'src/app/helpers/utility/item-list.js';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  public items: any;

  constructor() {
    this.items = items;
  }

  public getItems(): any {
    return this.items;
  }
}
