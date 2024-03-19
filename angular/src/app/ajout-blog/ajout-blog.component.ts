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
  blog: Blog = {id: 0, title: '', desc: '', messages: [] };
  users!: User[];

  constructor(public dialogRef: MatDialogRef<AjoutBlogComponent>,
              private dialogService: DialogService,
              private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.dialogService.setDialogOpenState(true);
  }

  onSubmit(): void {
    if (this.blog.title && this.blog.desc) {
      this.blog.id = this.dataService.getNextBlogId();
      this.dataService.currentUser.pipe(take(1)).subscribe(users => {
        if (users.length > 0){
          users[0].blogs.unshift(this.blog);
          console.log(users[0].blogs);
        }
      });
      this.dataService.usersSubject.pipe(take(1)).subscribe(users => {
        const updatedUsers = [users[0], ...users.slice(1)]; // Crée une copie mise à jour du tableau des utilisateurs
        this.dataService.usersSubject.next(updatedUsers); // Émet la nouvelle valeur avec le blog ajouté
      });
      this.closeAddBlog();
    }
  }

  closeAddBlog(): void {
    this.dialogService.setDialogOpenState(false);
    this.dialogRef.close();
  }



}
