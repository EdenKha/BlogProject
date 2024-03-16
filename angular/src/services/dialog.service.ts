import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Blog} from "../models/blog.model";
import {Message} from "../models/message.model";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private isDialogOpen = false;

  constructor() {}

  isDialogCurrentlyOpen(): boolean {
    return this.isDialogOpen;
  }

  setDialogOpenState(state: boolean): void {
    this.isDialogOpen = state;
  }

}
