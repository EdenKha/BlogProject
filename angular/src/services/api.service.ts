import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getMessage() {
    return this.http.get(
      'http://localhost:3000/api/message');
  }

  sendMessage(message: any) {
    return this.http.post(
      'http://localhost:3000/api/message', message);
  }
}
