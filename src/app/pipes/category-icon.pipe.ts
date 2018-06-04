import { Pipe, PipeTransform } from '@angular/core';
import { kebabCase } from 'lodash-es';

@Pipe({
  name: 'categoryIcon'
})
export class CategoryIconPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return kebabCase(value);
  }

}
