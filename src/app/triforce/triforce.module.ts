import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriforceComponent } from './components/triforce/triforce.component';
import { IntroductionRoutingModule } from './triforce-routing.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    TriforceComponent,
  ],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    MatTabsModule
  ],
  exports: [
  ]
})
export class TriforceModule { }
