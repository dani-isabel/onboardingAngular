import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() placeholder: string;
  @Input() send: string;
  @Input() userName: string;

  constructor( private router: Router ) { }

  addUserName(value: string): void {
    if (value.length >= 3) {
      this.userName = value;
      this.router.navigate(['/intro', this.userName]);
    } else {
      alert('You need enter a valid name');
    }
  }

  goTo(): void{
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
