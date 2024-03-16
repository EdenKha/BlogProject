import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Blog} from "../models/blog.model";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private isDialogOpen = false;
  private blogsSubject = new BehaviorSubject<Blog[]>([]);
  blogs$ = this.blogsSubject.asObservable();

  constructor() {}

  isDialogCurrentlyOpen(): boolean {
    return this.isDialogOpen;
  }

  setDialogOpenState(state: boolean): void {
    this.isDialogOpen = state;
  }

  updateBlogs(blogs: Blog[]): void {
    this.blogsSubject.next(blogs);
  }
}
