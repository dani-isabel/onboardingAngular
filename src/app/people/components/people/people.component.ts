import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  nextPage(): void{
    this.router.navigate(['/ready'])
  }

}
