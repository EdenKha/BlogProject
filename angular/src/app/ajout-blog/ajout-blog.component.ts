import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../../services/dialog.service';
import {FormsModule} from "@angular/forms";
import {Blog} from "../../models/blog.model";
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-ajout-blog',
  templateUrl: './ajout-blog.component.html',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  styleUrls: ['./ajout-blog.component.css']
})
export class AjoutBlogComponent {
  blog: Blog = {id: 0, title: '', desc: '', messages: [] };
  blogs: Blog[] = [];

  constructor(public dialogRef: MatDialogRef<AjoutBlogComponent>,
              private dialogService: DialogService,
              private dataService: DataService,
              private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.dialogService.setDialogOpenState(true);
    this.dataService.currentBlogs.subscribe(blogs => this.blogs = blogs);
  }

  onSubmit(): void {
    if (this.blog.title && this.blog.desc) {
      this.blogs.push({...this.blog});
      this.dataService.updateBlogs(this.blogs);
      this.closeAddBlog();
    }
  }

  closeAddBlog(): void {
    this.dialogService.setDialogOpenState(false);
    this.dialogRef.close();
  }



}
