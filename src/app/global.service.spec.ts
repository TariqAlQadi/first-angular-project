import { TestBed } from '@angular/core/testing';

import { GlobalService } from './global.service';

describe('GlobalService', () => {
  let service: GlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalService);
  });

  it('should return an array of products', () => {
    const products = service.getProducts();
    expect(products).toBeTruthy();
    expect(Array.isArray(products)).toBeTrue();
  });

  it('should add a product to the cart', () => {
    const product = {
      id: '1',
      name: 'Cards',
      description: 'cool',
      price: 12.5,
      imageSource: '/assets/img/1.jpg',
      stock: 6,
      inCart: 1,
    };
    service.addToCart(product);
    const cart = service.getCart();
    expect(cart).toContain(product);
  });

  it('should remove a product from the cart', () => {
    const product = {
      id: '1',
      name: 'Cards',
      description: 'cool',
      price: 12.5,
      imageSource: '/assets/img/1.jpg',
      stock: 6,
      inCart: 1,
    };
    service.addToCart(product);
    service.removeFromCart(product);
    const cart = service.getCart();
    expect(cart).not.toContain(product);
  });

  it('should add a product to the wishlist', () => {
    const product = {
      id: '1',
      name: 'Cards',
      description: 'cool',
      price: 12.5,
      imageSource: '/assets/img/1.jpg',
      stock: 6,
      inCart: 1,
    };
    service.addWish(product);
    const wish = service.getWish();
    expect(wish).toContain(product);
  });

  it('should decrease the stock of a product', () => {
    const id = '1';
    const initialStock = service
      .getProducts()
      .find((product) => product.id === id).stock;
    service.removeFromStock(id);
    const updatedStock = service
      .getProducts()
      .find((product) => product.id === id).stock;
    expect(updatedStock).toBe(initialStock - 1);
  });
});
