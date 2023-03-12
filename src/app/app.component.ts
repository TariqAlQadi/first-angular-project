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
  ];

  articleImages = ['assets/img/1.jpg', 'assets/img/2.jpg'];
}
