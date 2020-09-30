import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() placeholder: string;
  @Input() send: string;
  @Input() userName: string;

  constructor(  private router: Router) {}

  addUserName(value: string): void {
    if (value.length >= 3) {
      this.userName = value;
      console.log(this.userName);
      this.router.navigate(['/introduction', this.userName]);
    } else {
      alert('You need enter a valid name');
    }
  }

  ngOnInit(): void {
  }

}
