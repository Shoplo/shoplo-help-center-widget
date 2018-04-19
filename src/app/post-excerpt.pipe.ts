import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postExcerpt'
})
export class PostExcerptPipe implements PipeTransform {

  transform(value: any, limit?: number, trail?: String): any {
    let result = value || '';

    if (value) {
      const words = value.split(/\s+/);
      if (words.length > Math.abs(limit)) {
        if (limit < 0) {
          limit *= -1;
          result = trail + words.slice(words.length - limit, words.length).join(' ');
        } else {
          result = words.slice(0, limit).join(' ') + trail;
        }
      }
    }

    return result;
  }

}
