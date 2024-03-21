import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {MatDialogRef} from "@angular/material/dialog";
import {DialogService} from "../../services/dialog.service";
import {DataService} from "../../services/data.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Message} from "../../models/message.model";

@Component({
  selector: 'app-modif-message',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './modif-message.component.html',
  styleUrl: './modif-message.component.css'
})
export class ModifMessageComponent {
  message!: Message;

  constructor(public loginRef: MatDialogRef<ModifMessageComponent>,
              private dialogService: DialogService,
              private dataService: DataService,
  ) {}

  ngOnInit(){
    this.dataService.allMessagesO.subscribe(messages => {
      this.message = this.dataService.getCurrentMessage();
    })
  }

  submitMod() {
    this.closeLogin()
  }

  closeLogin(): void {
    this.dialogService.setDialogOpenState(false);
    this.loginRef.close();
  }

}
