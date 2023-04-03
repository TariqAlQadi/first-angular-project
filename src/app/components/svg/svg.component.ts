import { Component, Input, OnInit } from '@angular/core';

//gives svgs object key as string
interface SvgPaths {
  [key: string]: string;
}

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent implements OnInit {
  @Input() fill: string = '';
  @Input() width: string = '';
  @Input() variant: string = '';

  constructor() {}

  path = '';

  //all SVG
  svgs: SvgPaths = {
    cart: 'M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z',
    arrowUp: 'M7.03 9.97H11.03V18.89L13.04 18.92V9.97H17.03L12.03 4.97Z',
    arrowDown: 'M7.03 13.92H11.03V5L13.04 4.97V13.92H17.03L12.03 18.92Z',
  };

  // setPath(): void {
  //   this.path = this.svgs[this.variant];
  // }

  ngOnInit(): void {
    if (this.variant && this.svgs[this.variant]) {
      this.path = this.svgs[this.variant];
    }
  }
}
