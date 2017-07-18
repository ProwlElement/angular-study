import { CoursesService } from './courses.service';
import {Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
        <button (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue' : 'green'" type="button" class="btn btn-primary">
            Save
        </button>
    `,
})

export class CoursesComponent {
    isActive = true;

    onSave($event) {
        this.isActive = !this.isActive;
    }

}
