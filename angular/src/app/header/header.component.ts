import { Component } from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {Utilisateur} from "../../models/utilisateur.model";
import {AjoutBlogComponent} from "../ajout-blog/ajout-blog.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogService} from "../../services/ajout-blog.service";
import {LoginService} from "../../services/login.service";
import {Blog} from "../../models/blog.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LoginComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  users: Utilisateur[] = [];
  user: Utilisateur | null = null;


  constructor(public dialog: MatDialog,
              private loginService: LoginService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(users => {
      this.users = users;
      this.updateCurrentUser();
    });
  }

  updateCurrentUser(): void {
    if (this.users.length > 0) {
      this.user = this.users[this.users.length - 1];
    } else {
      this.user = null;
    }
  }

  openLogin(): void {
    if (!this.loginService.isDialogCurrentlyOpen()) {
      const dialogRef = this.dialog.open(LoginComponent);
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      });
    }
  }
}
