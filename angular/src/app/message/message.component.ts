import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {MessageService} from "../../services/message.service";
import {Message} from "../../models/message.model"
import {Utilisateur} from "../../models/utilisateur.model";

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
  utilisateur!: Utilisateur;


  constructor(private messageService : MessageService) {}

  ngOnInit() {
    if (this.message) {
      const currentDate = new Date();
      this.message.date = currentDate.toLocaleString();
    }
  }

}


