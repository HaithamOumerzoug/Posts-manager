import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:Array<User>=[{
    id:1,
    username:'haitham31',
    password:'123456789',
    img:'https://image.freepik.com/vecteurs-libre/homme-mafieux-mysterieux-fumant-cigarette_52683-34828.jpg'
  },{
    id:2,
    username:'said-bachar',
    password:'123456789',
    img:'https://image.freepik.com/vecteurs-libre/mysterieux-personnage-gangster-mafia-fumant_23-2148474614.jpg'
  },{
    id:3,
    username:'ayamane-gi',
    password:'123456789',
    img:'https://image.freepik.com/vecteurs-libre/homme-mafieux-mysterieux-portant-chapeau_52683-34829.jpg'
  },{
    id:4,
    username:'John-Doe',
    password:'123456789',
    img:'https://image.freepik.com/vecteurs-libre/caractere-tigre-mafia-chapeau_23-2148473394.jpg'
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
    var id=localStorage.getItem('id');
    return  {id:localStorage.getItem('id'), username:localStorage.getItem('username')};
  }
  
}
