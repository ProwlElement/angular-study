import { Component, OnInit, Input } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input() isLiked: boolean;
  @Input() likesCount: number;

  onClick() {
    this.likesCount += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
  }

}
