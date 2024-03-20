import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { User } from "../../models/user.model";
import { Message } from "../../models/message.model";
import {FormsModule} from "@angular/forms";
import {Blog} from "../../models/blog.model";

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent {
  post: Message = {
    id: 0,
    author: '',
    title: '',
    content: '',
    date: '',
    idBlog: -1,
    idUser: -1
  };
  posts: Message[] = [];
  currentUser!: User;
  currentBlog!: Blog;

  constructor(private dataService: DataService) {}

  onSubmit(): void {
    if (this.post.title && this.post.content) {
      this.currentUser = this.dataService.getCurrentUser();
      this.currentBlog = this.dataService.getCurrentBlog();
      this.post.id = this.dataService.getNextMessageId();
      this.post.author = this.currentUser.firstname;
      this.post.idBlog = this.currentBlog.id;
      this.post.idUser = this.currentUser.id;
      this.posts.unshift({ ...this.post });
      this.post.title = '';
      this.post.content = '';
      this.dataService.addMessage(this.posts);
      console.log(this.dataService.getMessageList());
    } else {
      console.error("Erreur: Les champs title et content doivent être remplis.");
    }
  }
}
