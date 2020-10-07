import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginManagerService {
  nameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('You');
  name: string;

  constructor() {
   }

  setName(name: string): void {
    this.nameSubject.next(name);
    this.nameSubject.subscribe( (name1) => {
      this.name = name1;
    });
  }

  getName(): string {
    return this.name;
  }
}
