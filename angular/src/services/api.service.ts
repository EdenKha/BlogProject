import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:3000/messages'; // URL de votre serveur Express.js

  constructor(private http: HttpClient) {}

  // Méthode pour envoyer un fichier JSON au serveur
  public sendJsonFile(jsonFile: any): Observable<any> {
    return this.http.post<any>(this.url, jsonFile);
  }
}
