import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './components/home/home-component.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [LoginComponent,HomeComponentComponent],
  imports: [CommonModule],
  exports: [LoginComponent,HomeComponentComponent]
})
export class HomeModule { }
