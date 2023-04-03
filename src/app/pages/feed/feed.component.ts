import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(private globalService: GlobalService) {}

  products = this.globalService.getProducts();

  sortDirection = 'asc';

  ngOnInit(): void {}

  addToCart(product: any) {
    this.globalService.addToCart(product);
  }
  addToWish(product: any) {
    this.globalService.addToWish(product);
  }
  //sort
  toggleSortDirection(sortDirection: string) {
    this.sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
  }
}
