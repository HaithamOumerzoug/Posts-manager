import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';
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
      user_id:1
    },
    {
      id:2,
      title:'JEE Course',
      body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consectetur repellendus quaerat. Doloribus, quia exercitationem nulla id consectetur repellat nostrum quis illum consequatur, ullam commodi neque. Iusto ullam quibusdam quas.',
      urlImage:'https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_960_720.jpg',
      comments:[],
      user_id:2
    },
    {
      id:3,
      title:'React.js Course',
      body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consectetur repellendus quaerat. Doloribus, quia exercitationem nulla id consectetur repellat nostrum quis illum consequatur, ullam commodi neque. Iusto ullam quibusdam quas.',
      urlImage:'https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378_960_720.jpg',
      comments:[],
      user_id:3
    },
    {
      id:4,
      title:'Adonis.js Course',
      body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consectetur repellendus quaerat. Doloribus, quia exercitationem nulla id consectetur repellat nostrum quis illum consequatur, ullam commodi neque. Iusto ullam quibusdam quas.',
      urlImage:'https://cdn.pixabay.com/photo/2016/02/19/10/14/boy-1209131__340.jpg',
      comments:[],
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
    // this.posts.map(post=>{
    //   this.posts=(post.id===id)?this.posts.splice(post.id,1):this.posts;
      
    // })
    this.posts=this.posts.filter(post=>post.id!==id);
  }
  getPost(id:number){
    this.posts.map(post=>{
      return (post.id===id)?post:null;
    })
  }
  updatePost(id:number,newpost:Post){
    this.posts=this.posts.map(post=>post.id===id ?post={id:id,title:newpost.title,body:newpost.body,user_id:newpost.user_id} : post)
    return this.posts
  }
  // getPostOwner(id:number){
  //   return this.userServ.getById(id)
  // }

  addCommentToPost(id:number,comment:Comment){
    this.posts.map(post=>post.id==id?post.comments=[comment,...post.comments]:post.comments)
    return this.posts;
  }
}
