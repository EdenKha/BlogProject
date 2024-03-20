import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { Message } from "../../models/message.model";
import { User } from "../../models/user.model";
import { DataService } from "../../services/data.service";
import {take} from "rxjs";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  standalone: true,
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  @Input() message!: Message;
  @Input() index: any;
  currentUser!: User;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.currentUser = this.dataService.getCurrentUser();
    const currentDate = new Date();
    this.message.date = currentDate.toLocaleString();
  }

  removeMessage() {
    this.dataService.removeMessage(this.message.id);
  }
}

