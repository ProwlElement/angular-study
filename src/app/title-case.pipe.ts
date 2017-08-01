import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value){
      return null;
    }else {
      let words = value.split(' ');
      for (var i = 0; i < words.length; i++)
    }


  }

}
