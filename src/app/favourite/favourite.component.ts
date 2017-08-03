import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() isFavourite: boolean;
  constructor() { }

  ngOnInit(){
    
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
  }

}
