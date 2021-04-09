import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import {LoggedInGuard} from '../../helpers/guards/logged-in.guard';

const routes: Routes = [{ path: '', component: UserComponent, canActivate: [LoggedInGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
