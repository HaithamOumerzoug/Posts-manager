import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';
import { Like } from '../models/like.model';
import { Post } from '../models/post.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts:Array<Post>=[
    {
      id:1,
      title:'Angular Course',
      body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consectetur repellendus quaerat. Doloribus, quia exercitationem nulla id consectetur repellat nostrum quis illum consequatur, ullam commodi neque. Iusto ullam quibusdam quas.',
      urlImage:'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_960_720.jpg',
      comments:[],
      likes:[],
      user_id:1
    },
    {
      id:2,
      title:'JEE Course',
      body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consectetur repellendus quaerat. Doloribus, quia exercitationem nulla id consectetur repellat nostrum quis illum consequatur, ullam commodi neque. Iusto ullam quibusdam quas.',
      urlImage:'https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_960_720.jpg',
      comments:[],
      likes:[],
      user_id:2
    },
    {
      id:3,
      title:'React.js Course',
      body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consectetur repellendus quaerat. Doloribus, quia exercitationem nulla id consectetur repellat nostrum quis illum consequatur, ullam commodi neque. Iusto ullam quibusdam quas.',
      urlImage:'https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378_960_720.jpg',
      comments:[],
      likes:[],
      user_id:3
    },
    {
      id:4,
      title:'Adonis.js Course',
      body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consectetur repellendus quaerat. Doloribus, quia exercitationem nulla id consectetur repellat nostrum quis illum consequatur, ullam commodi neque. Iusto ullam quibusdam quas.',
      urlImage:'https://cdn.pixabay.com/photo/2016/02/19/10/14/boy-1209131__340.jpg',
      comments:[],
      likes:[],
      user_id:4
    }]
  constructor(private userServ:UserService) { }
  getPosts(){
    return this.posts;
  }
  addPost(post:Post){
    this.posts=[post,...this.posts]
    return this.posts
  }
  deletePost(id:number):any{
    this.posts=this.posts.filter(post=>post.id!==id);
    return this.posts;
  }
  getPost(id:number|any){
    var myPost=new Post()
    this.posts.forEach((post:Post)=>{
      if(post.id==id)myPost=post
    })
    return myPost;
  }
  updatePost(id:number,newpost:Post){
    this.posts=this.posts.map(post=>post.id==id ?post={
      id:id,
      title:newpost.title,
      body:newpost.body,
      urlImage:newpost.urlImage,
      comments:post.comments,
      likes:post.likes,
      user_id:post.user_id
    } : post)
    return this.posts
  }
  // getPostOwner(id:number){
  //   return this.userServ.getById(id)
  // }

  addCommentToPost(id:number,comment:Comment){
    this.posts.map(post=>post.id==id?post.comments=[comment,...post.comments]:post.comments)
    return this.posts;
  }
  isLiked(check_post:Post):boolean{
    //Verifier si un post est déja like par le user courrant
    if(check_post.likes.length==0)return false;
    return check_post.likes.map((like:Like)=>like.user_id!=this.userServ.user.id?false:true)
  }
  addLikeToPost(newlike:Like){
    var ok="ok";
    var inOk ="";
    console.log(newlike)
    this.posts.map(post=>post.id==newlike.post_id?(post.likes.map((like:Like)=>like.user_id==newlike.user_id?ok="not_ok":ok)):ok)
    //Si user a n'a pas encore fait de like
    if(ok=="ok") this.posts.map(post=>post.id==newlike.post_id?post.likes=[newlike,...post.likes]:post.likes)
    //Si user veaut supprimer son like à un post
    else this.posts.map(post=>post.id==newlike.post_id?post.likes.filter((like:Like)=>like.user_id!==newlike.user_id):inOk="inok")
    console.log(this.posts,inOk)
    return this.posts;
  }
}
