import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() text: string = '';
  @Input() img: string = '';

  constructor() {}

  ngOnInit(): void {}

  like() {
    alert('Your have liked this article!');
  }

  addToCard() {
    alert('Your have added this article to your cart!');
  }
}
