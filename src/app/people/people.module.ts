import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './components/people/people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule
  ]
})
export class PeopleModule { }
