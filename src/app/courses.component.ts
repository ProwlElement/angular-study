
import { CoursesService } from './courses.service';
import { Component, NgModule } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template:  `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `,
})

export class CoursesComponent {
    email = 'two way binding';

    onKeyUp() {
        console.log(this.email);
    }

}


