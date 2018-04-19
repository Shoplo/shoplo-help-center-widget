import { Injectable } from '@angular/core';
import instantsearch from 'instantsearch.js/es';
import { environment } from '../../environments/environment';

@Injectable()
export class InstantSearchService {
  search = instantsearch(environment.algolia);

  constructor() {}
}
