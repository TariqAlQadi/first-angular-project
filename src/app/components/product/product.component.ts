import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  name = '';
  id = '';
  description = '';
  price = 0;
  imageSource = '';
  stock = 0;

  constructor(
    private route: ActivatedRoute,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadData(this.id);
  }

  loadData(id: string) {
    const currentProduct = this.globalService
      .getProducts()
      .find((product) => id === product.id);

    if (currentProduct) {
      this.name = currentProduct.name;
      this.description = currentProduct.description;
      this.price = currentProduct.price;
      this.imageSource = currentProduct.imageSource;
      this.stock = currentProduct.stock;
    }
  }

  addToCart(product: any) {
    this.globalService.addCart(product);
    console.log('Added to cart');
  }
}
