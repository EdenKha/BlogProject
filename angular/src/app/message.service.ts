import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagesSource = new BehaviorSubject<any[]>([]);
  currentMessages = this.messagesSource.asObservable();
  private functionCallSource = new Subject<void>();
  functionCall$ = this.functionCallSource.asObservable();


  constructor() { }

  setMessages(messages: any[]) {
    this.messagesSource.next(messages);
  }
}
