import { AsyncPipe, DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, JsonPipe, PercentPipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  imports: [AsyncPipe, DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, JsonPipe, PercentPipe, TitleCasePipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit {
  presentDate = new Date();

  time$: Observable<Date> = interval(1000).pipe(
    map(() => new Date())
  );

  price : number = 2000;

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  student = {
    name: 'Antoinette Joyze M. Magat',
    course: 'BSIT Web Development',
    year: '3rd Year'
  };

  completionRate: number = 0.87;

  titleText: string = 'learning angular pipes';

  ngOnInit(): void {
  }
}
