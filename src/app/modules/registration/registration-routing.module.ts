import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import {LoggedOutGuard} from '../../helpers/guards/logged-out.guard';

const routes: Routes = [
  { path: '', component: RegistrationComponent, canActivate: [LoggedOutGuard] },
  { path: '**', redirectTo: 'registration'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
