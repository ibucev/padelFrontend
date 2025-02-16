import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pair } from '../models/pair.model';
import { PairDto } from '../models/pair/pair-dto.model';

@Injectable({
  providedIn: 'root'
})
export class PairService {
  private basePairURL = "http://localhost:8088/api/v1/pairs";

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  constructor(private httpClient: HttpClient) { }

  getPairsList(): Observable<PairDto[]> {
    return this.httpClient.get<PairDto[]>(`${this.basePairURL}`, { headers: this.getHeaders() });
  }

  createPair(player1Id: number, player2Id: number): Observable<Object> {
    const url = `${this.basePairURL}?player1Id=${player1Id}&player2Id=${player2Id}`;
    return this.httpClient.post(url, {}, { headers: this.getHeaders() });
  }
}
