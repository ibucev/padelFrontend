import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchResult } from '../models/match-result.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private baseURL = "http://localhost:8088/api/v1/matches";
  
    constructor(private httpClient: HttpClient) { }
  
    getMatchesList(): Observable<MatchResult[]> {
      return this.httpClient.get<MatchResult[]>(`${this.baseURL}`);
    }

}
