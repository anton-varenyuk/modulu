import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderDashboardComponent } from './dashboard/order-dashboard.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import {SharedModule} from '../../shared/shared.module';
import {CheckoutComponent} from './checkout/checkout.component';



@NgModule({
  declarations: [
    OrderDashboardComponent,
    ItemDetailsComponent,
    CheckoutComponent
  ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        SharedModule
    ]
})
export class OrderModule { }
