import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() name = '';
  @Input() src = '';
  @Input() price = 0;
  @Input() id = 0;

  constructor(private globalService: GlobalService) {}

  addToCart() {
    //this.globalService.addToCart();
  }
  addToWish() {
    //this.globalService.addToWish()
  }
}
