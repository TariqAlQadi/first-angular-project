import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  articleTexts = [
    'These are super rare playing cards',
    'Just 50 Decks ever made!',
    'Lorem Ipsum!',
    'Sealed playing cards from 1950!',
  ];

  articleImages = [
    'assets/img/1.jpg',
    'assets/img/2.jpg',
    'assets/img/3.jpg',
    'assets/img/4.jpg',
  ];
}
