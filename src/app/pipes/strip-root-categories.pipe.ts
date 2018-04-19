import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'stripRootCategories'
})
export class StripRootCategoriesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let stripValue = value;

    if (value.indexOf('Instrukcje > Shoplo Store >') !== -1) {
      stripValue = value.replace('Instrukcje > Shoplo Store > ', '');
    }

    if (value.indexOf('Instrukcje > Shoplo Multichannel >') !== -1) {
      stripValue = value.replace('Instrukcje > Shoplo Multichannel > ', '');
    }

    if (value.indexOf('Instrukcje > Shoplo Czat >') !== -1) {
      stripValue = value.replace('Instrukcje > Shoplo Czat > ', '');
    }

    if (value.indexOf('Instrukcje > Shoplo >') !== -1) {
      stripValue = value.replace('Instrukcje > Shoplo > ', '');
    }

    return stripValue;
  }

}
