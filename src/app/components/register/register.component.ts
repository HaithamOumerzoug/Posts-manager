import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    img:new FormControl('')
  });
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var user=new User();
    user=this.registerForm.value;
    user.id=this.auth.users.length+1;
    this.auth.register(user)
    this.router.navigateByUrl('/login')
  }
}
