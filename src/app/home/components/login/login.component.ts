import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginManagerService } from '../../services/login-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() placeholder: string;
  @Input() send: string;
  correctName: boolean;

  constructor( private router: Router, private loginManagerService: LoginManagerService ) {}

  addUserName(name: string, event): void {
    event.preventDefault();
    const pattern = new RegExp('^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$', 'i');
    if (name.length < 3) {
      this.correctName = true;
    } else if (!pattern.test(name)) {
      this.correctName = true;
    } else {
      this.correctName = false;
      const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
      this.loginManagerService.setName(nameCapitalized);
      this.router.navigate(['/intro', nameCapitalized]);
    }
  }

  ngOnInit(): void {
  }

}
