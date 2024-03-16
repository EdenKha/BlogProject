import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Message} from "../../models/message.model"
import {User} from "../../models/user.model";
import {take} from "rxjs";
import {DataService} from "../../services/data.service";

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
  currentUser: User | undefined;




  constructor(private dataService: DataService) {
    this.loadCurrentUser()
  }

  ngOnInit() {
    if (this.message) {
      const currentDate = new Date();
      this.message.date = currentDate.toLocaleString();
    }
  }

  loadCurrentUser() {
    this.dataService.currentUser.pipe(take(1)).subscribe(users => {
      if (users && users.length > 0) {
        this.currentUser = users[users.length - 1];
      }
    });
  }

}


