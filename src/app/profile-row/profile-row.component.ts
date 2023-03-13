import { Component, Input, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent implements OnInit {
  @Input() name = '';
  @Input() img = '';
  @Input() location = '';
  @Input() canFollow = true;

  constructor(public a: AddService) {}

  ngOnInit(): void {}
}
