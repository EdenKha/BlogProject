 import { Component } from '@angular/core';
 import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-liste-message',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './liste-message.component.html',
  styleUrl: './liste-message.component.css'
})
export class ListeMessageComponent {


  constructor() {
  }
}
