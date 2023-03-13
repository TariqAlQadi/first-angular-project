import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  names = ['Niklas', 'Tariq', 'Anna'];
  images = ['assets/img/1.jpg', 'assets/img/2.jpg', 'assets/img/3.jpg'];

  constructor() {}

  //addng
  add(name: string, image: string) {
    this.names.push(name);
    this.images.push(image);
  }
  //load profile
  loadProfile(name: string) {
    alert(`...loading ${name}'s Profile Page`);
  }
}
