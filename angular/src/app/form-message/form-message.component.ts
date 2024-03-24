import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { User } from "../../models/user.model";
import { Message } from "../../models/message.model";
import {FormsModule} from "@angular/forms";
import {Blog} from "../../models/blog.model";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../services/api.service";

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

  constructor(private dataService: DataService, private http : HttpClient, private apiService : ApiService) {}

  onSubmit() {
    if (this.post.title && this.post.content && this.dataService.currentIdUser>0 ) {
      this.post.id = this.dataService.getNextMessageId();
      this.currentUser = this.dataService.getCurrentUser();
      this.post.author = this.currentUser.firstname;
      const currentDate = new Date();
      this.post.date = currentDate.toLocaleString();
      this.post.idBlog = this.dataService.currentIdBlog;
      this.post.idUser = this.dataService.currentIdUser;
      this.posts.unshift({ ...this.post });
      this.post.title = '';
      this.post.content = '';
      this.dataService.addMessage(this.posts).subscribe((response) => {
        console.log(response);});
    } else {
      console.error("Erreur: Les champs title et content doivent être remplis.");
    }


  }
}
