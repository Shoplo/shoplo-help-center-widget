import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripSpace'
})
export class StripSpacePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toLowerCase().replace(' ', '-');
  }

}
