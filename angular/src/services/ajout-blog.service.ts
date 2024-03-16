import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private isDialogOpen = false;
  private blogsSource = new BehaviorSubject<any[]>([]);
  currentMessages = this.blogsSource.asObservable();
  private functionCallSource = new Subject<void>();
  functionCall$ = this.functionCallSource.asObservable();

  constructor() {}

  isDialogCurrentlyOpen(): boolean {
    return this.isDialogOpen;
  }

  setDialogOpenState(state: boolean): void {
    this.isDialogOpen = state;
  }

  setBlogs(blogs: any[]) {
    this.blogsSource.next(blogs);
  }
}
