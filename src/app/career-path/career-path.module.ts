import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './components/career/career.component';
import { CareerRoutingModule } from './career-path-routing.module';
import { NextStepComponent } from '../shared/next-step/next-step.component';
import { PageTitleComponent } from '../shared/page-title/page-title.component';
import { RolePanelComponent } from './components/role-panel/role-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [CareerComponent, NextStepComponent,PageTitleComponent, RolePanelComponent],
  imports: [CommonModule, CareerRoutingModule, MatExpansionModule],
  exports: [CareerComponent, NextStepComponent, PageTitleComponent, RolePanelComponent]
})
export class CareerPathModule { }
