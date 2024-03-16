import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Blog} from "../models/blog.model";
import {Message} from "../models/message.model";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private isDialogOpen = false;
  public blogsSubject = new BehaviorSubject<Blog[]>([]);

  currentBlogs = this.blogsSubject.asObservable();
  private functionCallSource = new Subject<void>();
  functionCall$ = this.functionCallSource.asObservable();


  constructor() {}

  isDialogCurrentlyOpen(): boolean {
    return this.isDialogOpen;
  }

  setDialogOpenState(state: boolean): void {
    this.isDialogOpen = state;
  }

  updateBlogs(blogs: Blog[]): void {
    this.blogsSubject.next(blogs);
    console.log(blogs);
  }


}
