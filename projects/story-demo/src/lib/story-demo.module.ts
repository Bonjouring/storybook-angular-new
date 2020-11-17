import { NgModule } from '@angular/core';
import { StoryDemoComponent } from './story-demo.component';
import { PageComponent } from './components/page/page.component';



@NgModule({
  declarations: [StoryDemoComponent, PageComponent],
  imports: [
  ],
  exports: [StoryDemoComponent]
})
export class StoryDemoModule { }
