import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Blog} from "../models/blog.model";
import {Utilisateur} from "../models/utilisateur.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usersSubject = new BehaviorSubject<Utilisateur[]>([]);

  currentUser = this.usersSubject.asObservable();
  private functionCallSource = new Subject<void>();
  functionCall$ = this.functionCallSource.asObservable();


  constructor() {}

  updateUser(users: Utilisateur[]): void {
    this.usersSubject.next(users);
    console.log(users);
  }
}
