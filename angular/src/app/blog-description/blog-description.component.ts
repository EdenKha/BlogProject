import { Component, OnInit } from '@angular/core';
import { Blog } from "../../models/blog.model";
import { DialogService } from "../../services/ajout-blog.service";

@Component({
  selector: 'app-blog-description',
  templateUrl: './blog-description.component.html',
  standalone: true,
  styleUrls: ['./blog-description.component.css']
})
export class BlogDescriptionComponent implements OnInit {
  blogs: Blog[] = [];
  blog: Blog | null = null;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.dialogService.currentBlogs.subscribe(blogs => {
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
