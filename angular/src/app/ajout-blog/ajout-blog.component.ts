import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../../services/dialog.service';
import {FormsModule} from "@angular/forms";
import {Blog} from "../../models/blog.model";
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {DataService} from "../../services/data.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-ajout-blog',
  templateUrl: './ajout-blog.component.html',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  styleUrls: ['./ajout-blog.component.css']
})
export class AjoutBlogComponent {
  blog: Blog = {id: 0, title: '', desc: '',creator: -1,  messages: [] };
  blogs: Blog[] = [];
  currentUser!: User;

  constructor(public dialogRef: MatDialogRef<AjoutBlogComponent>,
              private dialogService: DialogService,
              private dataService: DataService,
              private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.dialogService.setDialogOpenState(true);
    this.dataService.currentBlogs.subscribe(blogs => this.blogs = blogs);
    this.dataService.currentUser.subscribe(users => {
      // Récupérer le dernier utilisateur de la liste
      if (users.length > 0) {
        this.currentUser = users[users.length - 1];
      }
    });
  }

  onSubmit() {
    // Vérifiez si un utilisateur est défini
    if (!this.currentUser) {
      console.warn("Aucun utilisateur défini. Utilisation de 'unknown' comme auteur du message.");
      // Si aucun utilisateur n'est défini, utilisez "unknown" comme auteur du message
    } else {
      if (this.blog.title || this.blog.desc) {
        // Si un utilisateur est défini, utilisez son firstname comme auteur du message
        this.blog.creator = this.currentUser.id;
        // Générer un nouvel ID pour le message
        this.blog.id = this.dataService.getNextBlogId();

        // Ajouter le message à la liste des messages
        this.blogs.push({...this.blog});
        this.dataService.addBlogInUser(this.blog, this.currentUser.id);
        console.log('Données du formulaire : ', this.blog);
        this.closeAddBlog();
      }
    }
  }

  closeAddBlog(): void {
    this.dialogService.setDialogOpenState(false);
    this.dialogRef.close();
  }



}
