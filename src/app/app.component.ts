
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tweet = {
    body: 'Body of like...',
    isLiked: true,
    likesCount: 10
  };

}
