import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import {FormsModule} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {DialogService} from "../../services/dialog.service";
import {DataService} from "../../services/data.service";
import {take} from "rxjs"; // Assurez-vous d'avoir une interface User définie

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    user: User = {
    id: 0,
    firstname: '',
    lastname: '',
    mail: '',
    phone: ''
  };

  constructor(public loginRef: MatDialogRef<LoginComponent>,
              private loginService: DialogService,
              private dataService: DataService,
  ) {}

  submitForm() {
    if (this.user.firstname) {
      this.user.id = this.dataService.getNextUserId();
      this.dataService.addUser(this.user);
      this.closeLogin();
      console.log(this.dataService.getUserList());
    } else {
      console.error("Erreur: Veuillez remplir le prénom.");
    }
  }

  closeLogin(): void {
    this.loginService.setDialogOpenState(false);
    this.loginRef.close();
  }

}
