import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {

  title = 'About the Organization';
  subtitle =
    'Learn how the team and committee leadership are shaping the world of conferences.';
  buttonText = 'Learn More';

  paragraphs = [
    'We believe in transparency, cooperation globally, and the free exchange of talent and ideas.',
    'Conferences are part of the legacy of this organization and continue today as a catalyst for creativity.'
  ];
}
