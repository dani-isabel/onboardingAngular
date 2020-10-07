import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriforceComponent } from './components/triforce/triforce.component';

const routes: Routes = [{ path: '', component: TriforceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionRoutingModule { }
