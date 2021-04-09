import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './helpers/guards/logged-in.guard';
import {LoggedOutGuard} from './helpers/guards/logged-out.guard';

const routes: Routes = [
  { path: 'registration', loadChildren: () => import('./modules/registration/registration.module').then(m => m.RegistrationModule), canActivate: [LoggedOutGuard]},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canLoad: [LoggedInGuard]},
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule), canLoad: [LoggedInGuard] },
  { path: 'order', loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule), canLoad: [LoggedInGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
