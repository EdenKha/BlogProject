import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  styleUrls: ['./form-message.component.css'],
})
export class FormMessageComponent {
  post = {
    title: '',
    message: '',
  };
  posts: { title: string; message: string }[] = [];

  constructor(private messageService: MessageService) {}

  onSubmit() {
    if (this.post.title && this.post.message) {
      this.posts.push({ ...this.post });
      this.post.title = '';
      this.post.message = '';
      this.messageService.setMessages(this.posts);
    }
  }
}
