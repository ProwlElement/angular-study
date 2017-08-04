import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent {
  // tslint:disable-next-line:no-input-rename
  @Input() isFavourite: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output() click = new EventEmitter();

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.click.emit({ newValue: this.isFavourite });
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean;
}
