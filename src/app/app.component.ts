import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {FormMessageComponent} from "./form-message/form-message.component";
import {HeaderComponent} from "./header/header.component";
import {ListeMessageComponent} from "./liste-message/liste-message.component";
import {BlogDescriptionComponent} from "./blog-description/blog-description.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent, FormMessageComponent, HeaderComponent, ListeMessageComponent, BlogDescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetBlog';
}
