import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  products = [
    {
      id: '1',
      name: 'Cards',
      description: 'cool',
      price: 12.5,
      imageSource: '/assets/img/1.jpg',
    },
    {
      id: '2',
      name: 'More cards',
      description: 'very cool',
      price: 43.5,
      imageSource: '/assets/img/2.jpg',
    },
    {
      id: '3',
      name: 'Deck',
      description: 'cool',
      price: 99.5,
      imageSource: '/assets/img/3.jpg',
    },
    {
      id: '4',
      name: 'Rare cards',
      description: 'cool',
      price: 32.5,
      imageSource: '/assets/img/4.jpg',
    },
  ];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadData(this.id);
  }

  loadData(id: string) {
    const currentProduct = this.products.find((product) => id === product.id);

    if (currentProduct) {
      this.name = currentProduct.name;
      this.description = currentProduct.description;
      this.price = currentProduct.price;
      this.imageSource = currentProduct.imageSource;
    }
  }
}
