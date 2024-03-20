import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";
import {Blog} from "../models/blog.model";
import {Message} from "../models/message.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private allUsers = new BehaviorSubject<User[]>([]);
  allUsersO = this.allUsers.asObservable();

  private allBlogs = new BehaviorSubject<Blog[]>([]);
  allBlogsO = this.allBlogs.asObservable();

  private allMessages = new BehaviorSubject<Message[]>([]);
  allMessagesO = this.allMessages.asObservable();

  private idUser: number = 0;
  private idBlog: number = 0;
  private idMessage: number = 0;

  currentIdUser: number = 0;
  currentIdBlog: number = 0;

  constructor() {}

  getUserList(){
    return this.allUsers.getValue();
  }

  getBlogList(){
    return this.allBlogs.getValue();
  }

  getMessageList(){
    return this.allMessages.getValue();
  }

  setCurrentIdUser(id: number){
    this.currentIdUser = id;
  }

  setCurrentIdBlog(id: number){
    this.currentIdBlog = id;
  }


  //retourne le blog actuel
  getCurrentBlog(){
    return this.getUserBlogs()[0];
  }

  getCurrentUser(){
    return this.getUserList()[0];
  }

  //retourne la liste de blogs de l'utilisateur actuel
  getUserBlogs(){
    let currentUser = this.getCurrentUser();
    return this.allBlogs.getValue().filter(blog =>
      blog.idUser == currentUser.id
    )
  }

  //retourne la liste des messages du blog acteul
  getUserBlogMessages(){
    let currentBlog = this.getCurrentBlog();
    return this.allMessages.getValue().filter(message =>
      message.idBlog == currentBlog.id
    )
  }

  //Change le blog actuel
  switchActualBlog(index: number) {
    // Obtenir le blog sélectionné
    const blog = this.allBlogs.getValue()[index];
    // Obtenir la liste actuelle des blogs
    const blogs = this.getBlogList();
    // Déplacer le blog sélectionné au début de la liste
    blogs.splice(index, 1); // Supprime le blog sélectionné de sa position actuelle
    blogs.unshift(blog); // Ajoute le blog sélectionné au début de la liste
    // Émettre la nouvelle valeur de la liste des blogs
    this.allBlogs.next(blogs);
  }

  //supprime un message de la liste
  removeMessage(id: number) {
    this.allMessages.next(this.allMessages.getValue());
    const messages = this.allMessages.getValue();
    const updatedMessages = messages.filter(message => message.id !== id);
    this.allMessages.next(updatedMessages);
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

  addUser(user: User){
    this.getUserList().unshift(user);
    this.allUsers.next(this.getUserList());
  }

  addBlog(blog: Blog){
    this.getBlogList().unshift(blog);
    this.allBlogs.next(this.getBlogList());
  }

  addMessage(messages: Message[]) {
    const messageList = this.getMessageList();
    if (messageList !== undefined) {
      if (messages.length > 0) {
        messageList.unshift(messages[0]);
      }
      this.allMessages.next(messageList);
    } else {
      console.error("La liste des messages est indéfinie.");
    }
  }

  updateBlogList(){
    this.allBlogs.next(this.allBlogs.getValue())
  }

  updateUserList(){
    this.allUsers.next(this.allUsers.getValue())
  }

  updateMessageList(){
    this.allMessages.next(this.allMessages.getValue())
  }


}
