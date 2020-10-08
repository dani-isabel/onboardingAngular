import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudiosComponent } from './components/studios/studios.component';
import { StudiosRoutingModule } from './studios-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [StudiosComponent],
  imports: [
    CommonModule,
    StudiosRoutingModule,
    SharedModule
  ]
})
export class StudiosModule { }
