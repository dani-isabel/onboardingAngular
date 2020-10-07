import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriforceComponent } from './components/triforce/triforce.component';
import { IntroductionRoutingModule } from './triforce-routing.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';
import { TagTriforceComponent } from './components/tag-triforce/tag-triforce.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    TriforceComponent,
    TagTriforceComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    IntroductionRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class TriforceModule { }
