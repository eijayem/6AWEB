import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  imports: [FormsModule],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css',
})
export class DataBindingDemo {
  message ='Data Binding Demonstration';
  title = "My First App!";
  description = "This is my new Angular Application";

  imageUrl = 'https://images.seeklogo.com/logo-png/50/1/angular-icon-logo-png_seeklogo-507324.png';
  w = 50;
  h = 50;
  altText = 'Angular Logo';
  textColor= 'blue'
  isHighlighted = true;
  yourName = 'Antoinette Joyze M. Magat';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
