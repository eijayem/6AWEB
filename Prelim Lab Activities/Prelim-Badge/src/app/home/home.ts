import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  title = 'Research Conferences';
  subtitle = 'Join our online events this 2026!';
  buttonText = 'Early-Bird Registration';

  locations = [
    {
      name: 'France',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Eiffel_tower_paris_france.jpg',
      description: 'The largest country in Western Europe, has long been a gateway between the noperen southern-regions.',
      field: 'Architecture and Fine Arts'
    },
    {
      name: 'Seoul',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Seoul_%28175734251%29.jpeg/1280px-Seoul_%28175734251%29.jpeg',
      description: 'Korean Soul (formally Soul-tukpyste, Special City of Sourr). city and capital of South Korea (the Republic of Korea).',
      field: 'Humanities and Arts'
    },
    {
      name: 'San Francisco',
      image: 'https://www.foto-julius.at/sanfrancisco/101_San_Francisco_at_Evening.jpg',
      description: 'It is a cultural and financcial centre of the western United States and one of the country most cosmopolitan cities.',
      field: 'Science and Technology'
    },
    {
      name: 'Boston',
      image: 'https://images.unsplash.com/photo-1606373664971-bf9b25eb508d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9zdG9ufGVufDB8fDB8fHww',
      description: 'Best known for its famous boked beans. Femaby Park, The Bostorin Marathon, and of course for the bar from Cheers.',
      field: 'Engineering and Tech'
    }
  ];
}
