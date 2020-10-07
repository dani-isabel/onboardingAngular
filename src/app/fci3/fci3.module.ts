import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fci3Component } from './components/fci3/fci3.component';
import { SharedModule } from '../shared/shared.module';
import { Fci3RoutingModule } from './fci3-routing.module';

@NgModule({
  declarations: [Fci3Component],
  imports: [
    CommonModule,
    SharedModule,
    Fci3RoutingModule,
  ]
})
export class Fci3Module { }
