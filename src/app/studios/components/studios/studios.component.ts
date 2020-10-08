import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.scss']
})
export class StudiosComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  nextPage(): void {
    this.router.navigate(['/career']);
  }

}
