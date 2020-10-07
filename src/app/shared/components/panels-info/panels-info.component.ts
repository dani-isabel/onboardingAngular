import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels-info',
  templateUrl: './panels-info.component.html',
  styleUrls: ['./panels-info.component.scss']
})
export class PanelsInfoComponent implements OnInit {
  @Input() seniority: string = '';
  @Input() roles: string[] = [];
  @Input() roles2: string[] = [];
  @Input() levels: string[] = [];
  @Input() class: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
