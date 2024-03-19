import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import {Message} from "../../models/message.model";
import {DataService} from "../../services/data.service";
import {User} from "../../models/user.model";

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

  constructor(private dataService: DataService) {}

  onSubmit() {
      if (this.post.title && this.post.content) {
        this.post.id = this.dataService.getNextMessageId();
        this.dataService.currentUser.subscribe(users => {
          if (users && users.length>0){
            if (users[0].blogs && users[0].blogs.length>0){
              this.post.author = users[0].firstname;
              users[0].blogs[0].messages.unshift(this.post);
              console.log(users[0].blogs[0].messages);
            }
          }
        })
      }else{
        console.error("Erreur: Les champs title et content doivent être remplis.");
      }
  }

}
