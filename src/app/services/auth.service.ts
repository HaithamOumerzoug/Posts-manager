import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private userServ:UserService) { }

  login(username:string |any ,password:string | any):void{
    this.userServ.users.forEach((user:any)=>{
      if(user.username===username && user.password===password){
        this.handelresponse({username:user.username,id:user.id})
      };
    }) 
  }
  loggedIn(){
    return localStorage.getItem('id')!==null && localStorage.getItem('username')!==null;
  }
  handelresponse(payload:any){
    localStorage.setItem('id',payload.id);
    localStorage.setItem('username',payload.username);
  }
  remove(){
    localStorage.removeItem('id');
    localStorage.removeItem('username');
  }
  getInfos(){
    return  {id:localStorage.getItem('id'), username:localStorage.getItem('username')};
  }
  
}
