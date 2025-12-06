import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  studentName: string = 'Antoinette Joyze M. Magat';
  age: number = 23;
  course: string = 'BSIT Web Development';
}
