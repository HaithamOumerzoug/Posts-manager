import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, CanActivate } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AddPostComponent } from './components/add-post/add-post.component';

const routes: Routes = [
    {
        path:"",
        component:PostsComponent
    },
    {
      path:"addPost",
      component:AddPostComponent
    },
    {
        path:"register",
        component:RegisterComponent
    },
    {
        path:"login",
        component:LoginComponent,
    },
    {
      path:"messenger",
      component:MessagesComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
