import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Login} from "../shared/models/login";
import {Token} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'https://khun.somee.com/api/login';
  private authTokenSubject: BehaviorSubject<Token | null> = new BehaviorSubject<Token | null>(null);

  constructor(private http: HttpClient) {}

  login(credentials: Login): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/login`, credentials).pipe(
      tap((token: Token) => this.authTokenSubject.next(token))
    );
  }

  logout(): void {
    this.authTokenSubject.next(null);
    // Ici, tu peux implémenter la logique de déconnexion si nécessaire
  }

  getAuthToken(): Observable<Token | null> {
    return this.authTokenSubject.asObservable();
  }

}
