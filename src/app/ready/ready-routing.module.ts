import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadyComponent } from './ready/ready.component';

const routes: Routes = [{ path: '', component: ReadyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadyRoutingModule { }
