import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-form-message',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form-message.component.html',
  styleUrl: './form-message.component.css'
})
export class FormMessageComponent {

  submit(){

  }

}
