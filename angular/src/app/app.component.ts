import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {FormMessageComponent} from "./form-message/form-message.component";
import {HeaderComponent} from "./header/header.component";
import {ListeMessageComponent} from "./liste-message/liste-message.component";
import {BlogDescriptionComponent} from "./blog-description/blog-description.component";
import {ApiService} from "../services/api.service";
import {Blog} from "../models/blog.model";
import {NgForOf} from "@angular/common";

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

  constructor(private apiService: ApiService) { };
  ngOnInit() {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });
  }
}
