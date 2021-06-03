import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Like } from 'src/app/models/like.model';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  isLiked:boolean=false;
  posts:Array<Post>=[];
  constructor(private postServ:PostService,private userServ:UserService) { }

  ngOnInit(): void {
    this.posts=this.postServ.getPosts();
  }
  addLike(post:Post|any){
    var like = new Like()
    like.post_id=post.id;
    like.user_id=this.user.id;
    // this.isLiked=this.postServ.isLiked(post);
    this.postServ.addLikeToPost(like)
  }
  deletePost(id:number){
    this.posts=this.postServ.deletePost(id);
  }
  get user(){
    return this.userServ.user;
  }
}
