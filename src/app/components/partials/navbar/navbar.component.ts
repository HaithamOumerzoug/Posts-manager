import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn:boolean=false;
  constructor(private authService:AuthService,private router:Router,private userServ:UserService) { }

  ngOnInit(): void {
    this.loggedIn=this.authService.loggedIn();
    console.log(this.loggedIn)
  }
  logout(){
    this.authService.remove();
    this.router.navigateByUrl('/login');
  }
  get user(){
    return this.userServ.user;
  }
}
