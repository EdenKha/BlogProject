import {Component,OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MessageComponent} from "../message/message.component";
import {FormMessageComponent} from "../form-message/form-message.component";
import {NgForOf} from "@angular/common";
import {Message} from "../../models/message.model";
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-liste-message',
  standalone: true,
  imports: [
    RouterLink,
    MessageComponent,
    FormMessageComponent,
    NgForOf
  ],
  templateUrl: './liste-message.component.html',
  styleUrl: './liste-message.component.css'
})

export class ListeMessageComponent {

  messages: Message[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessages.subscribe(messages => this.messages = messages);
  }

  removeMessage(index: number) {
    this.messages.splice(index, 1);
    this.dataService.updateMessages(this.messages);
  }

}
