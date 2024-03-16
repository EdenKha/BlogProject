import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { MessageService } from '../../services/message.service';
import {Message} from "../../models/message.model";

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent {
  post: Message = {
    id: 0,
    author: '',
    title: '',
    content: '',
    date: '',
  };
  messages: Message[] = [];

  constructor(private messageService: MessageService) {
  }

  onSubmit() {
    if (this.post.title && this.post.content) {
      this.messages.unshift({...this.post});
      this.post.title = '';
      this.post.content = '';
      this.messageService.setMessages(this.messages);
    }
  }
}
