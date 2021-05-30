import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private loggedIn = new BehaviorSubject<boolean>(this.authService.loggedIn());
  authStatus = this.loggedIn.asObservable();


  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(private authService:AuthService) { }

  get user(){
    return this.authService.getInfos();
  }
}
