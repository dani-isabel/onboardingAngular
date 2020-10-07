import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginManagerService } from '../../services/login-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() placeholder: string;
  @Input() send: string;
  @Input() userName: string;

  constructor(  private router: Router, private loginManagerService: LoginManagerService ) {}

  addUserName(value: string): void {
    if (value.length >= 3) {
      this.userName = value;
      this.loginManagerService.setName(this.userName);
      this.router.navigate(['/intro', this.userName]);
    } else {
      alert('You need enter a valid name');
    }
  }

  ngOnInit(): void {
  }

}
