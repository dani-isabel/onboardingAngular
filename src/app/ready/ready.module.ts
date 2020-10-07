import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadyComponent } from './ready/ready.component';
import { SharedModule } from '../shared/shared.module';
import { ReadyRoutingModule } from './ready-routing.module';


@NgModule({
  declarations: [ReadyComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReadyRoutingModule
  ]
})
export class ReadyModule { }
