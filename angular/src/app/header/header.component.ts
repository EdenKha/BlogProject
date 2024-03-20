import {Component, OnInit} from '@angular/core';
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

export class HeaderComponent implements OnInit {

  user!: User;

  constructor(public dialog: MatDialog,
              private loginService: DialogService,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.allUsersO.subscribe(users => {
      this.user = users[0]
    })
  }

  public openLogin(): void {
    if (!this.loginService.isDialogCurrentlyOpen()) {
      const dialogRef = this.dialog.open(LoginComponent);
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      });
    }
  }
}
