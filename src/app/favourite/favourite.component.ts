import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input() isFavourite: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output() click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.click.emit({ newValue: this.isFavourite });
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean;
}
