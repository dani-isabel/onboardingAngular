import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-panel',
  templateUrl: './role-panel.component.html',
  styleUrls: ['./role-panel.component.scss']
})
export class RolePanelComponent implements OnInit {
  @Input() seniority:string = '';
  @Input() roles:string[] = [];
  @Input() roles2:string[] = [];
  @Input() levels:string[] = [];
  @Input() class:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
