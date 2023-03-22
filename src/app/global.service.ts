import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  //global datasets
  private products: any[] = [
    {
      id: '1',
      name: 'Cards',
      description: 'cool',
      price: 12.5,
      imageSource: '/assets/img/1.jpg',
      stock: 6,
    },
    {
      id: '2',
      name: 'More cards',
      description: 'very cool',
      price: 43.5,
      imageSource: '/assets/img/2.jpg',
      stock: 2,
    },
    {
      id: '3',
      name: 'Deck',
      description: 'cool',
      price: 99.5,
      imageSource: '/assets/img/3.jpg',
      stock: 1,
    },
    {
      id: '4',
      name: 'Rare cards',
      description: 'cool',
      price: 32.5,
      imageSource: '/assets/img/4.jpg',
      stock: 3,
    },
  ];
  private cart: any[] = [];
  private wish: any[] = [];

  //global injectable functions
  getProducts(): any[] {
    return this.products;
  }

  addCart(product: any) {
    this.cart.push(product);
  }

  addWish(product: any) {
    this.wish.push(product);
  }

  clearCart() {
    this.cart = [];
  }

  clearWish() {
    this.wish = [];
  }

  removeStock(id: any) {
    const foundProduct = this.products.find((product) => {
      product.id === id;
    });
    if (foundProduct.stock > 0) {
      foundProduct.stock = foundProduct.stock--;
    } else {
      console.log('no more in stock!');
    }
  }
}
