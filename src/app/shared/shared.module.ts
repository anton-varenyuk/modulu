import { ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGenericComponent } from './components/button-generic/button-generic.component';
import { ButtonBComponent } from './components/button-b/button-b.component';
import { FormsModule } from '@angular/forms';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ButtonGenericComponent, ButtonBComponent, HeaderBarComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ButtonGenericComponent,
    ButtonBComponent,
    HeaderBarComponent,
    FooterComponent,
    FormsModule
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService
      ]
    };
  }
}
