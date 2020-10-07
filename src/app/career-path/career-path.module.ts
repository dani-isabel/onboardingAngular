import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './components/career/career.component';
import { CareerRoutingModule } from './career-path-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CareerComponent],
  imports: [CommonModule, CareerRoutingModule, MatExpansionModule, SharedModule],
  exports: [CareerComponent]
})
export class CareerPathModule { }
