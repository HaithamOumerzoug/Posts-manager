import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
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
  
  getById(id:number|string):User{
    var user_shr=new User();
    this.authService.users.forEach(user=>{
      if(user.id==id)user_shr=user;
    })
    return user_shr;
  }
  get user(){
    return this.authService.getInfos();
  }
}
