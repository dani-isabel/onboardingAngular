import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextStepComponent } from './components/next-step/next-step.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PanelsInfoComponent } from './components/panels-info/panels-info.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    NextStepComponent,
    PageTitleComponent,
    PanelsInfoComponent,
    CardComponent,
    CarouselComponent
  ],
  imports: [CommonModule, MatExpansionModule, MatCarouselModule.forRoot()],
  exports: [
    NextStepComponent,
    PageTitleComponent,
    PanelsInfoComponent,
    CardComponent,
    CarouselComponent,
  ],
})
export class SharedModule {}
