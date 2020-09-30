import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './components/home/home-component.component';
import { LoginComponent } from './components/login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [LoginComponent, HomeComponentComponent],
  imports: [CommonModule, HomeRoutingModule, LoginRoutingModule],
  exports: [LoginComponent, HomeComponentComponent]
})
export class HomeModule { }
