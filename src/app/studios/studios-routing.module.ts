import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudiosComponent } from './components/studios/studios.component';

const routes: Routes = [{ path: '', component: StudiosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiosRoutingModule { }
