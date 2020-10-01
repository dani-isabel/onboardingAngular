import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './components/career/career.component';
import { CareerRoutingModule } from './career-path-routing.module';
import { NextStepComponent } from '../shared/next-step/next-step.component';
import { PageTitleComponent } from '../shared/page-title/page-title.component';
import { RolePanelComponent } from './components/role-panel/role-panel.component';

@NgModule({
  declarations: [CareerComponent, NextStepComponent,PageTitleComponent, RolePanelComponent],
  imports: [CommonModule, CareerRoutingModule],
  exports: [CareerComponent, NextStepComponent, PageTitleComponent]
})
export class CareerPathModule { }
