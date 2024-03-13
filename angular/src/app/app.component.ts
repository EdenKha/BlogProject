import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {FormMessageComponent} from "./form-message/form-message.component";
import {HeaderComponent} from "./header/header.component";
import {ListeMessageComponent} from "./liste-message/liste-message.component";
import {BlogDescriptionComponent} from "./blog-description/blog-description.component";
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FormMessageComponent,
    BlogDescriptionComponent,
    ListeMessageComponent,
    SideMenuComponent,
    HeaderComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontEnd';
  message: any;
  constructor(private apiService: ApiService) { };
  ngOnInit() {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });
  }

  onClick() {
    this.apiService.sendMessage({title: 'Hello World'}).subscribe(data => {
      this.message = data;
    });
  }
}
