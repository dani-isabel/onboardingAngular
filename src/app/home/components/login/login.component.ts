import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() placeholder:string;
  @Input() send:string;
  @Input() userName:string = '';

  addUserName(value:string) {
    if(value.length >= 3) {
      this.userName = value;
      alert(value);
      console.log(this.userName);
    } 
    else {alert('You need enter a valid name');}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
