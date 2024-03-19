import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public usersSubject = new BehaviorSubject<User[]>([]);
  currentUser = this.usersSubject.asObservable();

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

  updateUser(updatedUser: User[]): void {
    this.usersSubject.next(updatedUser);
  }
}
