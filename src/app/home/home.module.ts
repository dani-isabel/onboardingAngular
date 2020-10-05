import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './components/home/home-component.component';
import { LoginComponent } from './components/login/login.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [LoginComponent, HomeComponentComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [LoginComponent, HomeComponentComponent]
})
export class HomeModule { }
