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
    phone: '',
    blogs: [],
  };

  constructor(public loginRef: MatDialogRef<LoginComponent>,
              private loginService: DialogService,
              private dataService: DataService,
  ) {}

  submitForm() {
    if (this.user.firstname) {
      this.user.id = this.dataService.getNextUserId();
      this.dataService.currentUser.pipe(take(1)).subscribe(users => {
        const updatedUsers = [this.user, ...users]; // Ajouter le nouvel utilisateur en tête de liste
        this.dataService.usersSubject.next(updatedUsers); // Émettre la nouvelle liste des utilisateurs
        console.log(updatedUsers);
      });
      this.closeLogin();
    } else {
      console.error("Erreur: Veuillez remplir tous les champs.");
    }
  }

  closeLogin(): void {
    this.loginService.setDialogOpenState(false);
    this.loginRef.close();
  }

}
