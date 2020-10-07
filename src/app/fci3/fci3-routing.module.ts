import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fci3Component } from './components/fci3/fci3.component';

const routes: Routes = [{ path:'', component: Fci3Component}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class Fci3RoutingModule {}