import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Array<Post>=[];
  constructor(private postServ:PostService) { }

  ngOnInit(): void {
    this.posts=this.postServ.getPosts();
    console.log(this.posts)
  }
  

}
