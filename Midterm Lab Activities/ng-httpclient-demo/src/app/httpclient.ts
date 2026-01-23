import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumsLimited(): Observable<Album[]> {
    return this.http
      .get<Album[]>('https://jsonplaceholder.typicode.com/albums')
      .pipe(map(albums => albums.slice(0, 5)));
  }
}
