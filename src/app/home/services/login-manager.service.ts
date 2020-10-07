import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
    this.nameSubject.subscribe( (newName) => {
      this.name = newName;
    });
  }

  getName(): string {
    return this.name;
  }
}
