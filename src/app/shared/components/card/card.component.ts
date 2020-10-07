import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() name: string;
  @Input() link: string;
  @Input() email: string;

  constructor() { }

  ngOnInit(): void {
  }

}
