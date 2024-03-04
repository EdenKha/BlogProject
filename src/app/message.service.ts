import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagesSource = new BehaviorSubject<any[]>([]);
  currentMessages = this.messagesSource.asObservable();

  constructor() { }

  setMessages(messages: any[]) {
    this.messagesSource.next(messages);
  }
}
