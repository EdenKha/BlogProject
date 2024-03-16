import { Component } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import {FormsModule} from "@angular/forms"; // Assurez-vous d'avoir une interface User définie

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
  user: Utilisateur = {
    id: 0,
    firstname: '',
    lastname: '',
    mail: '',
    phone: '',
    idblog: 0,
  };

  submitForm() {
    // Soumettre les données du formulaire, par exemple : appel à un service d'authentification
    console.log('Données du formulaire : ', this.user);
    // Réinitialiser le formulaire après soumission
    this.resetForm();
  }

  resetForm() {
    // Réinitialiser les champs du formulaire
    this.user = {
      id: 0,
      firstname: '',
      lastname: '',
      mail: '',
      phone: '',
      idblog: 0,
    };
  }
}
