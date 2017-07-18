
import { CoursesService } from './courses.service';
import { Component, NgModule } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template:  `
        {{ text | summary:30 }}
    `,
})

export class CoursesComponent {
    text = `
        aaaaasasasasaksakjgkdjgksgkdfgldgfldhgflshdgfslgflsdhgflsdhjgflshgflshdgflsjghdfdlsshhhhhhhhhhhhhhhhhhhhhh
    `;
}


