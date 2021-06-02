import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // users:Array<any>=[{
  //   id:1,
  //   username:'haitham31',
  //   password:'123456789'
  // },{
  //   id:2,
  //   username:'said-bachar',
  //   password:'123456789'
  // },{
  //   id:3,
  //   username:'ayamane-gi',
  //   password:'123456789'
  // },{
  //   id:4,
  //   username:'John-Doe',
  //   password:'123456789'
  // }]
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
