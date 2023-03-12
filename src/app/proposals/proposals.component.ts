import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent implements OnInit {
  names = ['Niklas', 'Tariq', 'Anna', 'Lennart'];

  images = [
    'assets/img/1.jpg',
    'assets/img/2.jpg',
    'assets/img/3.jpg',
    'assets/img/4.jpg',
  ];

  locations = ['Hannover', 'Leipzig', 'Dresden', 'Pulsnitz'];

  constructor() {}

  ngOnInit(): void {}
}
