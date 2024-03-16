import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../../services/ajout-blog.service';
import {FormsModule} from "@angular/forms";
import {Blog} from "../../models/blog.model";

@Component({
  selector: 'app-ajout-blog',
  templateUrl: './ajout-blog.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./ajout-blog.component.css']
})
export class AjoutBlogComponent {
  blog: Blog = { id: 0, iduser: 0, title: '', desc: '' };

  blogs: Blog[] = [];

  constructor(public dialogRef: MatDialogRef<AjoutBlogComponent>,
              private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.dialogService.setDialogOpenState(true);
  }

  close(): void {
    this.dialogService.setDialogOpenState(false);
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.blog.title && this.blog.desc) {
      this.blogs.unshift({...this.blog});
      this.blog.title = '';
      this.blog.desc = '';
      this.dialogService.updateBlogs(this.blogs);
      this.close();
    }
  }

}
