import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  like() {
    alert('Your have liked this article!');
  }

  addToCard() {
    alert('Your have added this article to your cart!');
  }
}
