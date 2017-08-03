import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'star',
  template: `
    <div>
      <span class="glyphicon"
        [class.glyphicon-star]="isActive"
        [class.glyphicon-star-empty]="!isActive"
        (click)="onClick()"
        >
      </span>
    </div>
  `,
  styleUrls: ['./star.component.css']
})

export class StarComponent {
  isActive = false;
  onClick() {
    this.isActive = !this.isActive;
  }
}
