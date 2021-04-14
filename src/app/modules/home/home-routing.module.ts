import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {LoggedInGuard} from '../../helpers/guards/logged-in.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [LoggedInGuard] },
  { path: '**', redirectTo: 'home'}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
