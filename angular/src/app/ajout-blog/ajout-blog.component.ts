import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../../services/dialog.service';
import {FormsModule} from "@angular/forms";
import {Blog} from "../../models/blog.model";
import {NgForOf, NgIf} from "@angular/common";
import {DataService} from "../../services/data.service";
import {User} from "../../models/user.model";
import {take} from "rxjs";

@Component({
  selector: 'app-ajout-blog',
  templateUrl: './ajout-blog.component.html',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  styleUrls: ['./ajout-blog.component.css']
})
export class AjoutBlogComponent {
  blog: Blog = {id: 0, title: '', desc: '',idUser: -1 };

  constructor(public dialogRef: MatDialogRef<AjoutBlogComponent>,
              private dialogService: DialogService,
              private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.dialogService.setDialogOpenState(true);
  }

  onSubmit(): void {
    this.blog.id = this.dataService.getNextBlogId();
    this.blog.idUser = this.dataService.getCurrentUser().id;
    this.dataService.addBlog(this.blog);
    console.log(this.dataService.getBlogList())
    this.closeAddBlog();
  }

  closeAddBlog(): void {
    this.dialogService.setDialogOpenState(false);
    this.dialogRef.close();
  }



}
