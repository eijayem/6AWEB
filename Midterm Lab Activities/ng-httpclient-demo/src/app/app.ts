import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from './user.model';
import { HttpclientService, Album } from './httpclient';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  protected readonly title = signal('http-client-demo');
  httpusers: User[] = [];
  albums: Album[] = [];

  constructor(private httpclient: HttpclientService) {}

  ngOnInit(): void {
    this.httpclient.getUsersRemotely().subscribe(data => {
      this.httpusers = data;
      console.log('Users loaded:', data);
    });

    this.httpclient.getAlbumsLimited().subscribe(data => {
      this.albums = data;
      console.log('Albums loaded (limited to 5):', data);
    });
  }
}
