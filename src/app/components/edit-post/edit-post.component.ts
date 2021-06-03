import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  Postform:FormGroup|any;
  post:Post|any;
  id:number|any;
  constructor(private postServ:PostService,
              private router:Router,
              private userServ:UserService,
              private activatedRoute: ActivatedRoute) { 

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.post=this.postServ.getPost(this.id);
    this.Postform= new FormGroup({
      title:new FormControl(this.post.title), 
      body:new FormControl(this.post.body),
      urlImage:new FormControl(this.post.urlImage),
    })
  }

  ngOnInit(): void {

  }
  updatePost(){
    this.post=this.Postform.value;
    this.postServ.updatePost(this.id,this.post);
    this.router.navigateByUrl('/')
  }
}
