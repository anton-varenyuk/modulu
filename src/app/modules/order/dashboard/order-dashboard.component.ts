import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss']
})

export class OrderDashboardComponent implements OnInit {
  public itemList;
  public state: any;
  public showDummy: boolean;

  constructor(private itemService: ItemsService,
              private route: ActivatedRoute ) {
    this.showDummy = true;
    this.itemList = this.itemService.getItems();
  }

  ngOnInit(): void {
  }

  hideDummy(): void {
    this.showDummy = false;
  }

}
