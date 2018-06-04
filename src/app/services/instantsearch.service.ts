import { Injectable } from '@angular/core';
import instantsearch from 'instantsearch.js/es';
import { LocalesService } from './locales.service';

@Injectable()
export class InstantSearchService {
  public search_autocomplete: any;
  public search: any;

  constructor(
    private locales: LocalesService
  ) {
    this.search = instantsearch(locales.localData.algolia);
    this.search_autocomplete = instantsearch(locales.localData.algolia);
  }
}
