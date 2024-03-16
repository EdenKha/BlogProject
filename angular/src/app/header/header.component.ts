import { Component } from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {User} from "../../models/user.model";
import {MatDialog} from "@angular/material/dialog";
import {DataService} from "../../services/data.service";
import {DialogService} from "../../services/dialog.service";

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

  users: User[] = [];
  user: User | null = null;

  constructor(public dialog: MatDialog,
              private loginService: DialogService,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(users => {
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
