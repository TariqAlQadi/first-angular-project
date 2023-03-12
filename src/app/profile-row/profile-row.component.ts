import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent implements OnInit {
  @Input() name = '';
  @Input() img = '';
  @Input() location = '';

  constructor() {}

  ngOnInit(): void {}

  loadProfile() {
    alert(`...loading ${this.name} Page`);
  }
}
