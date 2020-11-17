import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    ButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
