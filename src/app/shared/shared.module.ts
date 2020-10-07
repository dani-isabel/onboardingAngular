import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextStepComponent } from './components/next-step/next-step.component';
import { PageTitleComponent } from './components/page-title/page-title.component';



@NgModule({
  declarations: [NextStepComponent, PageTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NextStepComponent, PageTitleComponent
  ]
})
export class SharedModule { }
