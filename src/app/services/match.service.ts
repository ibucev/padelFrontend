import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchResult } from '../models/match-result.model';
import { CreateMatch } from '../models/create-match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private baseURL = "http://localhost:8088/api/v1/matches";

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  constructor(private httpClient: HttpClient) { }

  getMatchesList(): Observable<MatchResult[]> {
    return this.httpClient.get<MatchResult[]>(`${this.baseURL}`, { headers: this.getHeaders() });
  }

  getMatchesListByPlayer(playerId: number): Observable<MatchResult[]> {
    return this.httpClient.get<MatchResult[]>(`${this.baseURL}/${playerId}`, { headers: this.getHeaders() });
  }

  createMatch(match: CreateMatch): Observable<Object> {
    return this.httpClient.post(this.baseURL, match, { headers: this.getHeaders() })
  }
}
