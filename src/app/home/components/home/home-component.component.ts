import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  @Input() title:string;

  constructor() { }

  ngOnInit(): void {
  }

}
