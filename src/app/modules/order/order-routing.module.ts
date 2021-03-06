import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDashboardComponent } from './dashboard/order-dashboard.component';
import {LoggedInGuard} from '../../helpers/guards/logged-in.guard';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {CheckoutComponent} from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: OrderDashboardComponent, canActivate: [LoggedInGuard], children: [
      { path: 'item/:id', component: ItemDetailsComponent, canActivate: [LoggedInGuard]}
    ]
  },
  { path: 'checkout', component: CheckoutComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
