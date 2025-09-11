import { Component, Input } from '@angular/core';

@Component({
  selector: 'bubble-icon-text-button',
  standalone: true,
  imports: [],
  templateUrl: './icon-text-button.component.html',
  styleUrl: './icon-text-button.component.scss',
})
export class IconTextButtonComponent {
  @Input() icon!: string;
  @Input() caption!: string;
  @Input() altText!: string;
  @Input() height = '';
  @Input() width = '';
}
