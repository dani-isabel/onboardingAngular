import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginManagerService } from '../../../home/services/login-manager.service';

@Component({
  selector: 'app-triforce',
  templateUrl: './triforce.component.html',
  styleUrls: ['./triforce.component.scss']
})
export class TriforceComponent implements OnInit {
  name: string;

  constructor( private loginManagerService: LoginManagerService, private router: Router ) { }

  ngOnInit(): void {
    this.name = this.loginManagerService.getName();
  }

  nextPage(): void{
    this.router.navigate(['/fci3']);
  }

}
