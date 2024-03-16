import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {MessageService} from "../../services/message.service";
import {Message} from "../../models/message.model"
import {Utilisateur} from "../../models/utilisateur.model";
import {UserService} from "../../services/user.service";
import {take} from "rxjs";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})



export class MessageComponent implements OnInit{
  @Input() message!: Message;
  @Input() index: any;
  currentUser: Utilisateur | undefined;




  constructor(private userService: UserService) {
    this.loadCurrentUser()
  }

  ngOnInit() {
    if (this.message) {
      const currentDate = new Date();
      this.message.date = currentDate.toLocaleString();
    }
  }

  loadCurrentUser() {
    this.userService.currentUser.pipe(take(1)).subscribe(users => {
      if (users && users.length > 0) {
        this.currentUser = users[users.length - 1];
      }
    });
  }

}


