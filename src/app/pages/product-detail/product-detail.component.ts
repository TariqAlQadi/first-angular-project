import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductComponent implements OnInit {
  name = '';
  id = '';
  description = '';
  price = 0;
  imageSource = '';
  stock = 0;
  inCart = 0;
  currentProduct: any; // declare currentProduct property

  constructor(
    private route: ActivatedRoute,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadData(this.id);
  }

  loadData(id: string) {
    this.currentProduct = this.globalService
      .getProducts()
      .find((product) => id === product.id);

    if (this.currentProduct) {
      this.name = this.currentProduct.name;
      this.description = this.currentProduct.description;
      this.price = this.currentProduct.price;
      this.imageSource = this.currentProduct.imageSource;
      this.stock = this.currentProduct.stock;
      this.inCart = this.currentProduct.inCart;
    }
  }

  addToCart() {
    this.globalService.addToCart(this.currentProduct);
  }

  addToWish() {
    this.globalService.addToWish(this.currentProduct);
  }
}
