import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  // Slider Images
  slides = [
    {image: '../../../assets/img/foundation.png'},
    {image: '../../../assets/img/speciality.png'},
    {image: '../../../assets/img/strategic.png'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
