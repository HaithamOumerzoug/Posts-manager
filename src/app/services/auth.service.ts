import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:Array<any>=[{
    id:1,
    username:'haitham31',
    password:'123456789'
  },{
    id:2,
    username:'said-bachar',
    password:'123456789'
  },{
    id:3,
    username:'ayamane-gi',
    password:'123456789'
  },{
    id:4,
    username:'John-Doe',
    password:'123456789'
  }]
  constructor() { }

  login(username:string |any ,password:string | any):void{
    this.users.forEach((user:any)=>{
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
