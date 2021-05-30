import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(
    private authService:AuthService,
    private router:Router,
    private userServ:UserService) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.loginForm.get('username')?.value,this.loginForm.get('password')?.value)
    if(this.authService.loggedIn()){
      this.userServ.changeAuthStatus(true);
      this.router.navigateByUrl('/')
    }
    
  }

}
