import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { IntroductionRoutingModule } from './introduction-routing.module';
import { KeyInfoComponent } from './components/key-info/key-info.component';



@NgModule({
  declarations: [IntroductionComponent, KeyInfoComponent],
  imports: [
    CommonModule,
    IntroductionRoutingModule
  ],
  exports: [
    IntroductionComponent
  ]
})
export class IntroductionModule { }
