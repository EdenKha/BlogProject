import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { Message } from "../../models/message.model";
import { User } from "../../models/user.model";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  standalone: true,
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements AfterViewInit {
  @Input() message!: Message;
  @Input() index: any;
  currentUser!: User;

  constructor(private dataService: DataService) {}

  ngAfterViewInit() {
    if (this.message && !this.message.date) {
      const currentDate = new Date();
      this.message.date = currentDate.toLocaleString();
    }
    this.dataService.currentUser.subscribe(users => {
      if (users && users.length > 0) {
        this.currentUser = users[0];
      }
    });
  }
}

