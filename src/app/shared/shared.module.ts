import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextStepComponent } from './components/next-step/next-step.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PanelsInfoComponent } from './components/panels-info/panels-info.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [NextStepComponent, PageTitleComponent, PanelsInfoComponent, CardComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    NextStepComponent, PageTitleComponent, PanelsInfoComponent, CardComponent
  ]
})
export class SharedModule { }
