import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  title = 'Messenger - chatting';
  user: String | any;
  room: String | any;
  // tslint:disable-next-line:ban-types
  messageText: String |any;
  messageArray: Array< {user: String , message: String } > = [];

  constructor(private messageService: MessageService, private userServ: UserService, private router: Router) {

      this.messageService.newUserJoined().subscribe(data => this.messageArray.push(data));
      this.messageService.userLeftRoom().subscribe(data => this.messageArray.push(data));
      this.messageService.newMessageReceived().subscribe(data => this.messageArray.push(data));
   }

    join() {
          this.messageService.joinRoom({user: this.userconncted.username, room: this.room});
      }

    leave() {
        this.messageService.leaveRoom({user: this.userconncted.username, room: this.room});
        this.router.navigateByUrl('/') 
      }

    sendMessage()
      {
        this.messageService.sendMessage({user: this.userconncted.username, room: this.room, message: this.messageText});
      }

    ngOnInit(): void {
     
    }

    get userconncted(){
      return this.userServ.user;
    }

  

}
