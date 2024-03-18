import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";
import { Message } from "../models/message.model";
import { Blog } from "../models/blog.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public usersSubject = new BehaviorSubject<User[]>([]);
  currentUser = this.usersSubject.asObservable();
  public blogsSubject = new BehaviorSubject<Blog[]>([]);
  currentBlogs = this.blogsSubject.asObservable();
  private messagesSource = new BehaviorSubject<Message[]>([]);
  currentMessages = this.messagesSource.asObservable();

  private idUser: number = 0;
  private idBlog: number = 0;
  private idMessage: number = 0;

  constructor() {
  }

  getNextMessageId(): number {
    const nextId = ++this.idMessage;
    return nextId;
  }

  getNextBlogId(): number {
    const nextId = ++this.idBlog;
    return nextId;
  }

  getNextUserId(): number {
    const nextId = ++this.idUser;
    return nextId;
  }

  updateUsers(users: User[]): void {
    this.usersSubject.next(users);
    console.log(users);
  }

  updateBlogs(blogs: Blog[]): void {
    this.blogsSubject.next(blogs);
    console.log(blogs);
  }

  updateMessages(messages: Message[]): void {
    this.messagesSource.next(messages);
    console.log(messages)
  }

  addBlogInUser(blog: Blog, userId: number): void {
    // Obtenez la liste actuelle des utilisateurs
    const users = this.usersSubject.getValue();

    // Recherche de l'index de l'utilisateur dans le tableau d'utilisateurs
    const userIndex = users.findIndex(user => user.id === userId);

    // Si l'utilisateur est trouvé, ajouter le blog à son tableau de blogs
    if (userIndex !== -1) {
      users[userIndex].blogs.push(blog);

      // Mettre à jour la liste des utilisateurs avec le nouvel état
      this.usersSubject.next(users);
    }
  }

}
