import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../../services/ajout-blog.service';
import {FormsModule} from "@angular/forms";
import {Blog} from "../../models/blog.model";
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-ajout-blog',
  templateUrl: './ajout-blog.component.html',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  styleUrls: ['./ajout-blog.component.css']
})
export class AjoutBlogComponent {
  blog: Blog = {id: 0, iduser: 0, title: '', desc: '' };

  blogs: Blog[] = [];

  constructor(public dialogRef: MatDialogRef<AjoutBlogComponent>,
              private dialogService: DialogService,
              private http: HttpClient
  ) {}


  ngOnInit(): void {
    this.dialogService.setDialogOpenState(true);
    this.dialogService.currentBlogs.subscribe(blogs => this.blogs = blogs);
  }

  close(): void {
    this.dialogService.setDialogOpenState(false);
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.blog.title && this.blog.desc) {
      this.blogs.push({...this.blog});
      this.dialogService.updateBlogs(this.blogs);
      this.close();
    }
  }

    ajouterBlog(nouveauBlog: any): void {
      this.http.post('http://localhost:3000/api/blogs', nouveauBlog).subscribe(response => {
        console.log('Nouveau blog ajouté avec succès !', response);
      }, error => {
        console.error('Erreur lors de l\'ajout du blog :', error);
      });

  }

}
