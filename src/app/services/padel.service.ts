import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PadelService {
  private baseURL = "http://localhost:8088/api/v1/players";

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  constructor(private httpClient: HttpClient) { }

  getPlayersList(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(`${this.baseURL}`, { headers: this.getHeaders() });
  }

  getPlayerById(id: number): Observable<Player> {
    return this.httpClient.get<Player>(`${this.baseURL}/${id}`, { headers: this.getHeaders() });
  }

  deletePlayer(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`, { headers: this.getHeaders() });
  }

  editPlayer(id: number, player: Player): Observable<Object> {
    return this.httpClient.put<Player>(`${this.baseURL}/${id}`, player, { headers: this.getHeaders() });
  }
}
