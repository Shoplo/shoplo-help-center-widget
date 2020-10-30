import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'stripRootCategories'
})
export class StripRootCategoriesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const stripValue = value.split(' > ');
    return stripValue[stripValue.length - 1];
  }

}
