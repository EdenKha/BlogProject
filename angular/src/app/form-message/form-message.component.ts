import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import {Message} from "../../models/message.model";
import {DataService} from "../../services/data.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  styleUrls: ['./form-message.component.css']
})

export class FormMessageComponent {

  post: Message = {
    id: 0,
    author: '',
    title: '',
    content: '',
    date: '',
  };
  messages: Message[] = [];
  currentUser!: User;

  constructor(private dataService: DataService) {
    this.loadCurrentUser()
  }

  onSubmit() {
    // Vérifiez si un utilisateur est défini
    if (!this.currentUser) {
      console.warn("Aucun utilisateur défini. Utilisation de 'unknown' comme auteur du message.");
      // Si aucun utilisateur n'est défini, utilisez "unknown" comme auteur du message
      this.post.author = "unknown";
    } else {
      if (this.post.title || this.post.content) {
        // Si un utilisateur est défini, utilisez son firstname comme auteur du message
        this.post.author = this.currentUser.firstname;
        // Générer un nouvel ID pour le message
        this.post.id = this.dataService.getNextMessageId();

        // Ajouter le message à la liste des messages
        this.messages.unshift({...this.post});

        // Réinitialiser les champs du formulaire
        this.post.title = '';
        this.post.content = '';

        // Mettre à jour la liste des messages dans le service DataService
        this.dataService.updateMessages(this.messages);
      }
    }
  }

  loadCurrentUser() {
    // Récupérer le dernier utilisateur du flux currentUser
    this.dataService.currentUser.subscribe(users => {
      if (users && users.length > 0) {
        this.currentUser = users[users.length - 1];
      }
    });
  }
}
