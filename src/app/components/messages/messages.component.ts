import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  title = 'instant-chatting';
  user: String | any;
  room: String | any;
  // tslint:disable-next-line:ban-types
  messageText: String |any;
  messageArray: Array<{user: String , message: String }> = [];

  constructor(private messageService: MessageService) {
    this.messageService.newUserJoined()
        .subscribe(data => this.messageArray.push(data));

    this.messageService.userLeftRoom()
        .subscribe(data => this.messageArray.push(data));
    this.messageService.newMessageReceived()
        .subscribe(data => this.messageArray.push(data));
   }

    join(){
          this.messageService.joinRoom({user: this.user, room: this.room});
      }

      leave(){
        this.messageService.leaveRoom({user: this.user, room: this.room});
      }

      sendMessage()
      {
        this.messageService.sendMessage({user: this.user, room: this.room, message: this.messageText});
      }

  ngOnInit(): void {
  }

  

}
