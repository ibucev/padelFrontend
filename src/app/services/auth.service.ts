import { Injectable } from '@angular/core';
import { AuthenticationRequest } from '../models/authentication-request.model';
import { AuthenticationResponse } from '../models/authentication-response.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { RegistrationRequest } from '../models/registration-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = "http://localhost:8088/api/v1/auth/"

  constructor(private httpClient: HttpClient) { }

  authenticate(credentials: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>(this.baseURL + "authenticate", credentials);
  }

  registrate(player: RegistrationRequest): Observable<Object> {
    return this.httpClient.post(this.baseURL + "register", player); 
  }

  activateAccount(token: string): Observable<void> {
    return this.httpClient.get<void>(`${this.baseURL}activate-account?token=${token}`);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
  clearToken(): void {
    localStorage.removeItem('token');
  }
}
