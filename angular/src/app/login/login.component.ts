import { Component } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import {FormsModule} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {DialogService} from "../../services/ajout-blog.service";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../services/login.service";
import {UserService} from "../../services/user.service"; // Assurez-vous d'avoir une interface User définie

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

  users!: Utilisateur[];
  constructor(public loginRef: MatDialogRef<LoginComponent>,
              private loginService: LoginService,
              private userService: UserService,
              private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginService.setDialogOpenState(true);
    this.userService.currentUser.subscribe(users => this.users = users);
  }

  submitForm() {
    this.users.push({...this.user});
    this.userService.updateUser(this.users);
    console.log('Données du formulaire : ', this.user);
    this.close();
  }

  /*addUser(newUser: Utilisateur): void {
    this.http.post('http://localhost:3000/api/users', newUser).subscribe(response => {
      console.log('Nouveau blog ajouté avec succès !', response);
    }, error => {
      console.error('Erreur lors de l\'ajout du blog :', error);
    });
  }*/

  close(): void {
    this.loginService.setDialogOpenState(false);
    this.loginRef.close();
  }
}
