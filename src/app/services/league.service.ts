import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CreateLeague } from '../models/league/create-league.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private baseURL = "http://localhost:8088/api/v1/leagues";

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  constructor(private httpClient: HttpClient) { }

  createLeague(selectedPairs: CreateLeague):Observable<Object> {
    return this.httpClient.post(this.baseURL, selectedPairs, { headers: this.getHeaders() })
  }
}
