import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
// Interpolation
studentName = "Antoinette Joyze M. Magat";
score = 95;

// Property binding
imageUrl = "https://logolook.net/wp-content/uploads/2022/12/Twice-Logo.png";
isDisabled = true;

// Attribute binding
colSpanValue = 3;

// Class binding
isPassing = true;

// Style binding
boxColor = "#FBCEB1";
boxSize = "150px";
}
