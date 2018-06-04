import { Pipe, PipeTransform } from '@angular/core';
import { replace } from 'lodash-es';

@Pipe({
  name: 'post'
})
export class PostPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let stripValue = value;

    stripValue = replace(value, /<a href/g , '<a target="_blank" href');
    // _.replace(text, /az/g, "qu");
    return stripValue;
  }

}
