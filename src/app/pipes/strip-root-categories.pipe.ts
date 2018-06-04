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

    if (value.indexOf('Manuals > Shoplo Store >') !== -1) {
      stripValue = value.replace('Manuals > Shoplo Store > ', '');
    }

    if (value.indexOf('Manuals > Shoplo Multichannel >') !== -1) {
      stripValue = value.replace('Manuals > Shoplo Multichannel > ', '');
    }

    if (value.indexOf('Manuals > Shoplo Chat >') !== -1) {
      stripValue = value.replace('Manuals > Shoplo Chat > ', '');
    }

    if (value.indexOf('Manuals > Shoplo >') !== -1) {
      stripValue = value.replace('Manuals > Shoplo > ', '');
    }

    return stripValue;
  }

}
