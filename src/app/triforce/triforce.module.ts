import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriforceComponent } from './components/triforce/triforce.component';
import { IntroductionRoutingModule } from './triforce-routing.component';


@NgModule({
  declarations: [
    TriforceComponent,
  ],
  imports: [
    CommonModule,
    IntroductionRoutingModule
  ],
  exports: [
  ]
})
export class TriforceModule { }
