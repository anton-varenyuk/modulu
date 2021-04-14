import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import Item from '../../../shared/interfaces/item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss']
})

export class OrderDashboardComponent implements OnInit {
  public itemList: Item[];
  public showDummy: boolean;

  constructor( private itemService: ItemsService,
               private router: Router ) {
    this.showDummy = true;
    this.itemList = this.itemService.getItems();
  }

  ngOnInit(): void {
  }

  public hideDummy(): void {
    this.showDummy = false;
  }

  public navigateTo(item: Item): void {
    this.router.navigateByUrl( `/order/item/${item.id}`, { state: item });
    this.hideDummy();
  }

}
