import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() idPost:any;
  constructor(private postServ:PostService,private userServ:UserService) { }

  ngOnInit(): void {
  }
  sendComment(content:any){
    // console.log(`Post : ${this.idPost} , Comment: ${content.value}`)
    var comment=new Comment();
    comment.content=content.value;
    comment.user_id=this.userServ.user.id;
    comment.user_id=this.idPost;
    this.postServ.addCommentToPost(this.idPost,comment);
  }

}
