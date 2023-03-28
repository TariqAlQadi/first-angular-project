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
      inCart: 0,
    },
    {
      id: '2',
      name: 'More cards',
      description: 'very cool',
      price: 43.5,
      imageSource: '/assets/img/2.jpg',
      stock: 2,
      inCart: 0,
    },
    {
      id: '3',
      name: 'Deck',
      description: 'cool',
      price: 99.5,
      imageSource: '/assets/img/3.jpg',
      stock: 1,
      inCart: 0,
    },
    {
      id: '4',
      name: 'Rare cards',
      description: 'cool',
      price: 32.5,
      imageSource: '/assets/img/4.jpg',
      stock: 3,
      inCart: 0,
    },
  ];
  private cart: any[] = [];
  private wish: any[] = [];

  totalPrice = 0;

  //global injectable functions
  getProducts(): any[] {
    return this.products;
  }
  //Cart
  getCart(): any[] {
    return this.cart;
  }

  addToCart(product: any) {
    const index = this.cart.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );

    if (index > -1) {
      this.cart[index].inCart++;
    } else {
      product.inCart = 1;
      this.cart.push(product);
    }

    this.totalPrice = this.getTotalPrice();
  }

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, product) => total + product.price * product.inCart,
      0
    );
  }

  removeFromCart(product: any) {
    this.cart.splice(this.cart.indexOf(product), 1);
    this.totalPrice = this.getTotalPrice();
  }

  //Wishlist
  addWish(product: any) {
    this.wish.push(product);
  }

  //Stock
  removeFromStock(id: any) {
    const foundProduct = this.products.find((product) => {
      product.id === id;
    });

    if (foundProduct.stock > 0) {
      foundProduct.stock = foundProduct.stock--;
    } else {
      alert('no more in stock!');
    }
  }
}
