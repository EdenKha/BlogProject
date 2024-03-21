import {Component, OnInit} from '@angular/core';
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {FormMessageComponent} from "./form-message/form-message.component";
import {HeaderComponent} from "./header/header.component";
import {ListeMessageComponent} from "./liste-message/liste-message.component";
import {BlogDescriptionComponent} from "./blog-description/blog-description.component";
import {ApiService} from "../services/api.service";
import {NgForOf} from "@angular/common";
import {DialogService} from "../services/dialog.service";
import {LoginComponent} from "./login/login.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FormMessageComponent,
    BlogDescriptionComponent,
    ListeMessageComponent,
    SideMenuComponent,
    HeaderComponent,
    NgForOf
  ],
  styleUrls: ['./app.component.css'],
  standalone: true
})

export class AppComponent implements OnInit {

  message: any;

  constructor(public dialog: MatDialog,private loginService: DialogService, private apiService: ApiService) { };
  ngOnInit() {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });
    if (!this.loginService.isDialogCurrentlyOpen()) {
      const dialogRef = this.dialog.open(LoginComponent);
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      });
    }
  }
}
