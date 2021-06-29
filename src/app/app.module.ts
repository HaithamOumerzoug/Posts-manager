import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { UsernamePipe } from './pipes/username.pipe';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CommentComponent } from './components/comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    PostsComponent,
    MessagesComponent,
    UsernamePipe,
    AddPostComponent,
    CommentComponent,
    EditPostComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
