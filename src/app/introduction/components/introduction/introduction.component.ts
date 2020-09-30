import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  name: string;
  constructor( private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params => {
      console.log( params );
      this.name = params.name;
    })
  }

  ngOnInit(): void {
  }

}
