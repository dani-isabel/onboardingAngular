import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fci3',
  templateUrl: './fci3.component.html',
  styleUrls: ['./fci3.component.scss']
})
export class Fci3Component implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  nextPage(): void {
    this.router.navigate(['/people']);
  }
}
