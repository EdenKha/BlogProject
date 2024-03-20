import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from "../../models/blog.model";
import {DataService} from "../../services/data.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-blog-description',
  templateUrl: './blog-description.component.html',
  standalone: true,
  styleUrls: ['./blog-description.component.css'],
  imports: [
    CommonModule
  ]
})
export class BlogDescriptionComponent implements OnInit {
  blog!: Blog;
  currentUser!: User;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.allBlogsO.subscribe(blogs => {
      this.currentUser = this.dataService.getCurrentUser();
      if (this.dataService.getUserList().length>0)
        if (blogs && blogs.length > 0) {
          this.blog = blogs.filter(blog => blog.idUser == this.currentUser.id)[0]
        }
    });
  }
}
