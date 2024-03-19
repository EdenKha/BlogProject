import { Component, OnInit } from '@angular/core';
import { Blog } from "../../models/blog.model";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-blog-description',
  templateUrl: './blog-description.component.html',
  standalone: true,
  styleUrls: ['./blog-description.component.css']
})
export class BlogDescriptionComponent implements OnInit {
  blog!: Blog;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentUser.subscribe(users => {
      if (users && users.length > 0) {
        const currentUser = users[0]; // Sélection du premier utilisateur pour l'exemple, à adapter selon vos besoins
        if (currentUser.blogs && currentUser.blogs.length > 0) {
          this.blog = currentUser.blogs[0];
        } else {
          this.blog = {id: -1, title: '', desc: '', messages: []};
        }
      } else {
        this.blog = {id: -1, title: '', desc: '', messages: []};
      }
    });
  }
}
