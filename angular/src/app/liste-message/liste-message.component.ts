import {Component,OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MessageComponent} from "../message/message.component";
import {FormMessageComponent} from "../form-message/form-message.component";
import {Message} from "../../models/message.model";
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-liste-message',
  standalone: true,
  imports: [
    RouterLink,
    MessageComponent,
    FormMessageComponent,
    CommonModule
  ],
  templateUrl: './liste-message.component.html',
  styleUrl: './liste-message.component.css'
})

export class ListeMessageComponent implements OnInit{

  messages: Message[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(users => {
      if (users && users.length>0){
        if (users[0].blogs && users[0].blogs.length>0){
          if (users[0].blogs[0].messages && users[0].blogs[0].messages.length>0){
            this.messages = users[0].blogs[0].messages;
          }
        }
      }
    });
  }

  /*removeMessage(index: number) {
    this.messages.splice(index, 1);
    this.dataService.updateMessages(this.messages);
  }*/

}
