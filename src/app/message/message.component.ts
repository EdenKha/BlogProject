import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent{

  messages: any[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.currentMessages.subscribe(messages => this.messages = messages);
  }
}
