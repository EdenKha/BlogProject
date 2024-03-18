import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from "@angular/material/dialog";
import { AjoutBlogComponent } from "../ajout-blog/ajout-blog.component";
import { DialogService } from "../../services/dialog.service";
import { Blog } from "../../models/blog.model";
import { DataService } from "../../services/data.service";
import {BlogComponent} from "../blog/blog.component";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  standalone: true,
  imports: [
    BlogComponent,
    CommonModule
  ],
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(
    public dialog: MatDialog,
    private dialogService: DialogService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    // Subscribe to the currentUser observable
    this.dataService.currentUser.subscribe(users => {
      // Check if there are users
      if (users && users.length > 0) {
        // Get the last user in the list
        const currentUser = users[users.length - 1];
        // Filter blogs for the ID of the current user
        this.dataService.currentBlogs.subscribe(blogs => {
          this.blogs = blogs.filter(blog => blog.creator === currentUser.id);
        });
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
