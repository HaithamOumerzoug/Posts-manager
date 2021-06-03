import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, CanActivate } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { AuthGuard } from './guards/auth.guard';
import { AfterauthGuard } from './guards/afterauth.guard';

const routes: Routes = [
    {
        path:"",
        component:PostsComponent,
        canActivate:[AuthGuard]
    },
    {
      path:"addPost",
      component:AddPostComponent,
      canActivate:[AuthGuard]
    },
    {
        path:"register",
        component:RegisterComponent,
        canActivate:[AfterauthGuard]
    },
    {
        path:"login",
        component:LoginComponent,
        canActivate:[AfterauthGuard]
    },
    {
      path:"messenger",
      component:MessagesComponent,
      canActivate:[AuthGuard]
    },
    {
      path:"edit/:id",
      component:EditPostComponent,
      canActivate:[AuthGuard]
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
