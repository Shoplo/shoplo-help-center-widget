import { Pipe, PipeTransform } from '@angular/core';
import { replace } from 'lodash-es';

@Pipe({
  name: 'stripPostContent'
})
export class StripPostContentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let stripValue = value;

    stripValue = replace(value, /\&gt;/g , '>');
    // _.replace(text, /az/g, "qu");
    return stripValue;
  }

}
