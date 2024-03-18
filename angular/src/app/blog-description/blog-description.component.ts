import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from "../../models/blog.model";
import {DataService} from "../../services/data.service";

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
  blogs: Blog[] = [];
  blog: Blog | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentBlogs.subscribe(blogs => {
      this.blogs = blogs;
      this.updateCurrentBlog();
    });
  }

  updateCurrentBlog(): void {
    if (this.blogs.length > 0) {
      this.blog = this.blogs[this.blogs.length - 1];
    } else {
      this.blog = null;
    }
  }
}
