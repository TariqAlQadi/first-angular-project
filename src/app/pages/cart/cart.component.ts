import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private globalService: GlobalService) {}

  cart = this.globalService.getCart();

  totalPrice = 0;

  ngOnInit(): void {
    this.getTotalPrice();
  }

  getTotalPrice(): void {
    this.totalPrice = this.globalService.getTotalPrice();
  }

  checkout(): void {
    alert('your are checking out!');
  }
}
