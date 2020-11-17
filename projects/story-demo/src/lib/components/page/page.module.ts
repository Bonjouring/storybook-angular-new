import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { HeaderModule } from '../header/header.module';
import { PageComponent } from './page.component';



@NgModule({
  declarations: [PageComponent],
  imports: [
    ButtonModule,
    HeaderModule
  ],
  exports: [PageComponent]
})
export class PageModule { }
