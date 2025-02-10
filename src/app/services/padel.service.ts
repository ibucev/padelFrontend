import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pair } from '../models/pair.model';

@Injectable({
  providedIn: 'root'
})
export class PadelService {
  private baseURL = "http://localhost:8088/api/v1/players";
  private basePairURL = "http://localhost:8088/api/v1/pairs";

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    console.log("This is my token " + token);
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

  getPairsList(): Observable<Pair[]> {
    return this.httpClient.get<Pair[]>(`${this.basePairURL}`, { headers: this.getHeaders() });
  }

  createPair(player1Id: number, player2Id: number): Observable<Object> {
    const url = `${this.basePairURL}?player1Id=${player1Id}&player2Id=${player2Id}`;
    console.log("Saljem pair na backend \n" + url );
    return this.httpClient.post(url, {}, { headers: this.getHeaders() }); 
  }
}
