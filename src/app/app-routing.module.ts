import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'intro/:name', loadChildren: () => import('./introduction/introduction.module').then(m => m.IntroductionModule)},
  { path: 'career', loadChildren: () => import('./career-path/career-path.module').then(m => m.CareerPathModule)},
  { path: 'triforce', loadChildren: () => import('./triforce/triforce.module').then(m => m.TriforceModule)},
  { path: 'fci3', loadChildren: () => import('./fci3/fci3.module').then(m => m.Fci3Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
