import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-key-info',
  templateUrl: './key-info.component.html',
  styleUrls: ['./key-info.component.scss']
})
export class KeyInfoComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  goTo(): void{
    this.router.navigate(['/studios']);
  }

}
