import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MessageComponent} from "../message/message.component";
import {FormMessageComponent} from "../form-message/form-message.component";
import {Message} from "../../models/message.model";
import {DataService} from "../../services/data.service";
import {Blog} from "../../models/blog.model";


@Component({
  selector: 'app-liste-message',
  standalone: true,
  imports: [
    RouterLink,
    MessageComponent,
    FormMessageComponent,
    CommonModule
  ],
  templateUrl: './liste-message.component.html',
  styleUrl: './liste-message.component.css'
})

export class ListeMessageComponent implements OnInit {
  messages: Message[] = [];

  constructor(private dataService: DataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataService.getAllMessages().subscribe(data => {
      this.messages = data;
    });
    this.messages = this.dataService.getMessageList();
    this.dataService.allMessagesO.pipe().subscribe(messages => {
      this.messages = messages.filter(message => message.idBlog === this.dataService.currentIdBlog);
      console.log(this.messages);
    });
  }


}



