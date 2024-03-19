import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AjoutBlogComponent} from "../ajout-blog/ajout-blog.component";
import {DialogService} from "../../services/dialog.service";
import {NgForOf} from "@angular/common";
import {BlogComponent} from "../blog/blog.component";
import {Blog} from "../../models/blog.model";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    NgForOf,
    BlogComponent,
    AjoutBlogComponent
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})

export class SideMenuComponent {

  blogs: Blog[] = [];

  constructor(
    public dialog: MatDialog,
    private dialogService: DialogService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.currentUser.subscribe(users => {
      if (users && users.length > 0) {
        const currentUser = users[0]; // Sélection du premier utilisateur pour l'exemple, à adapter selon vos besoins
        if (currentUser.blogs && currentUser.blogs.length > 0) {
          this.blogs = currentUser.blogs;
        } else {
          this.blogs = [];
        }
      } else {
        this.blogs = [];
      }
    });
  }

  openDialog(): void {
    if (!this.dialogService.isDialogCurrentlyOpen()) {
      const dialogRef = this.dialog.open(AjoutBlogComponent);
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      });
    }
  }

}
