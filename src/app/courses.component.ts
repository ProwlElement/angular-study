
import { CoursesService } from './courses.service';
import { Component, NgModule } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template:  `
        {{ course.title | uppercase}} <br/>
        {{ course.rating | number }} <br/>
        {{ course.students | number:'1.2-4'}} <br/>
        {{ course.price | currency:'EUR':true }} <br/>
        {{ course.releaseDate | date:'shortDate' }} <br/>
    `,
})

export class CoursesComponent {
    course = {
        title: 'Prowlmusic event',
        rating: 9.47,
        students: 300000,
        price: 80,
        releaseDate: new Date(2016, 2, 1)
    };
}


