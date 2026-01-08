import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.html',
  styleUrls: ['./partners.css']
})
export class Partners {

  title = 'Our Partners';
  description =
    'You can achieve a very impressive effect by using our animated navbar.';
  buttonText = 'Become a Sponsor';

  partners = [
    {
      company: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png',
      level: 'Platinum'
    },
    {
      company: 'Apple Inc.',
      logo: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-index-content-uploads-10.png',
      level: 'Gold'
    },
    {
      company: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png',
      level: 'Silver'
    },
    {
      company: 'Google Inc.',
      logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/google-color.png',
      level: 'Bronze'
    }
  ];
}
