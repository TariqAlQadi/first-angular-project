import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  names = ['Costumor X'];
  images = ['assets/img/profileImage.jpg'];

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
