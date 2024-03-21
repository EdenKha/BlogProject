import {ChangeDetectorRef, Injectable} from '@angular/core';
import {BehaviorSubject, distinct} from "rxjs";
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
  currentIdMessage = 0;

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

  setCurrentIdMessage(id: number) {
    this.currentIdMessage = id;
  }


  //retourne le blog actuel
  getCurrentBlog(){
    return this.getUserBlogs()[0];
  }

  getCurrentUser(){
    let user = this.allUsers.getValue().find(user => user.id == this.currentIdUser);
    if (user == undefined){
      user = {id: -1, firstname: '', lastname:'', phone: '', mail: ''}
    }
    return user;
  }

  //retourne la liste de blogs de l'utilisateur actuel
  getUserBlogs(){
    let currentUser = this.getCurrentUser();
    return this.allBlogs.getValue().filter(blog =>
      blog.idUser == currentUser.id
    )
  }

  //supprime un message de la liste
  removeMessage(id: number) {
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

  updateBlogList() {
    const currentBlogs = this.allBlogs.getValue(); // Obtenir la valeur actuelle
    this.allBlogs.next([...currentBlogs]); // Émettre une nouvelle valeur identique à la précédente
  }

  updateUserList(){
    this.allUsers.next(this.allUsers.getValue())
  }

  updateMessageList(){
    this.allMessages.next(this.allMessages.getValue())
  }


  findUserByName(firstname: string) {
    let user = this.allUsers.getValue().find(user => user.firstname == firstname);
    if (user == undefined){
      user = {id: -1, firstname: '', lastname:'', phone: '', mail: ''}
    }
    return user;
  }

  findBlogByName(title: string, user: User) {
    let blog =  this.allBlogs.getValue().find(blog => blog.title == title);
    if (blog == undefined){
      blog = {id: -1, title: '', desc: '', idUser: -1}
    }
    return blog;
  }


  getCurrentMessage() {
    let message =  this.allMessages.getValue().find(message => message.id == this.currentIdMessage);
    if (message == undefined){
      message = {id: -1, title: '', content: '', idUser: -1, date:'', idBlog: -1, author: ''}
    }
    return message;
  }

  insert(id: number, user: User) {
    this.allUsers.getValue().splice(id, 1);
    this.allUsers.getValue().unshift(user);
  }
}
