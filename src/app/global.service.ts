import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  //global data
  private products: any[] = [
    {
      id: '1',
      name: 'Cards',
      description: 'cool',
      price: 12.5,
      imageSource: '/assets/img/1.jpg',
      stock: 6,
      inCart: 1,
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

  private cart: any[] = [
    {
      id: '1',
      name: 'Cards',
      description: 'cool',
      price: 12.5,
      imageSource: '/assets/img/1.jpg',
      stock: 6,
      inCart: 1,
    },
  ];
  private wish: any[] = [];

  totalPrice = 0;

  //global injectable functions
  getProducts(): any[] {
    return this.products;
  }

  //toggles class on element per #id
  toggleClass(elRef: any, cssClass: string) {
    const hasClass = elRef.classList.contains(cssClass);

    if (hasClass) {
      elRef.classList.remove(cssClass);
    } else {
      elRef.classList.add(cssClass);
    }
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

  removeFromCart(product: any) {
    this.cart.splice(this.cart.indexOf(product), 1);
    this.totalPrice = this.getTotalPrice();
  }
  getTotalPrice(): number {
    //type: number, because this function RETURNs a number
    return this.cart.reduce(
      (total, product) => total + product.price * product.inCart,
      0
    );
  }
  //Wishlist
  getWish() {
    return this.wish;
  }
  addToWish(product: any) {
    this.wish.push(product);
  }
  removeFromWish() {}

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
  addToStock() {}
}
