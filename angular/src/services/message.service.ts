import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Message} from "../models/message.model";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagesSource = new BehaviorSubject<Message[]>([]);
  currentMessages = this.messagesSource.asObservable();
  private functionCallSource = new Subject<void>();
  functionCall$ = this.functionCallSource.asObservable();


  constructor() { }

  setMessages(messages: Message[]) {
    this.messagesSource.next(messages);
  }
}
