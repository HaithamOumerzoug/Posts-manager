import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  Postform:FormGroup|any;
  constructor(private postServ:PostService,private router:Router,private userServ:UserService) { 
    this.Postform= new FormGroup({
      title:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      body:new FormControl(''),
      urlImage:new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  addPost(){
    var new_post= new Post()
    new_post=this.Postform.value;
    new_post.id=this.postServ.posts.length+1;
    new_post.user_id=this.userServ.user.id;
    new_post.comments=[];
    new_post.likes=[];
    this.postServ.addPost(this.Postform.value)
    this.router.navigateByUrl('/')
  }
}
