 import { Component } from '@angular/core';
 import {RouterLink} from "@angular/router";
 import {MessageComponent} from "../message/message.component";


@Component({
  selector: 'app-liste-message',
  standalone: true,
  imports: [
    RouterLink,
    MessageComponent
  ],
  templateUrl: './liste-message.component.html',
  styleUrl: './liste-message.component.css'
})
export class ListeMessageComponent {


  constructor() {
  }
}
