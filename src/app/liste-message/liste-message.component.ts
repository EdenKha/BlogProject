import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MessageComponent} from "../message/message.component";
import {FormMessageComponent} from "../form-message/form-message.component";


@Component({
  selector: 'app-liste-message',
  standalone: true,
  imports: [
    RouterLink,
    MessageComponent,
    FormMessageComponent
  ],
  templateUrl: './liste-message.component.html',
  styleUrl: './liste-message.component.css'
})
export class ListeMessageComponent {
}
