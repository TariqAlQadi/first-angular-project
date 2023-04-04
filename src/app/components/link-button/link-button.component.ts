import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-b',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
})
export class LinkComponent {
  @Input() routerLink = '';
  @Input() type = '';
  @Input() text = '';
  @Input() variant = '';

  @Input() svgWidth = '';
  @Input() svgFill = '';
  @Input() svgVariant = '';
  @Input() svgTitle = '';
}
