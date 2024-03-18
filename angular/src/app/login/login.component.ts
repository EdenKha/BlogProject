import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import {FormsModule} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {DialogService} from "../../services/dialog.service";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../services/data.service"; // Assurez-vous d'avoir une interface User définie

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
  users!: User[];

  constructor(public loginRef: MatDialogRef<LoginComponent>,
              private loginService: DialogService,
              private dataService: DataService,
              private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginService.setDialogOpenState(true);
    this.dataService.currentUser.subscribe(users => {
      this.users = users;
    });
  }

  submitForm() {
    if (this.user.firstname!=''){
      // Recherche de l'utilisateur avec le même nom et prénom
      const existingUserIndex = this.users.findIndex(user =>
        user.firstname === this.user.firstname && user.lastname === this.user.lastname
      );

      if (existingUserIndex !== -1) {
        // Si l'utilisateur existe déjà, le déplacer à la fin de la liste
        const existingUser = this.users.splice(existingUserIndex, 1)[0];
        this.users.push(existingUser);
      } else {
        // Si l'utilisateur n'existe pas, l'ajouter à la fin de la liste
        this.user.id = this.dataService.getNextUserId();
        this.users.push({...this.user});
      }

      // Mettre à jour la liste des utilisateurs
      this.dataService.updateUsers(this.users);
      console.log('Données du formulaire : ', this.user);
      this.closeLogin();
    }
  }

  closeLogin(): void {
    this.loginService.setDialogOpenState(false);
    this.loginRef.close();
  }

}
