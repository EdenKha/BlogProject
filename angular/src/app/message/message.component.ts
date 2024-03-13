import {Component, Input, OnInit} from '@angular/core';
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
export class MessageComponent implements OnInit{
  @Input() message: any;
  @Input() index: any;
  currentDateTime: string = '';

  constructor(private messageService : MessageService) {}

  ngOnInit() {
      const currentDate = new Date();
      this.currentDateTime = currentDate.toLocaleString();
  }


}
