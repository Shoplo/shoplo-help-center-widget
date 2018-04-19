import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectMenu } from 'instantsearch.js/es/connectors';
@Component({
  selector: 'app-products-select-component',
  templateUrl: './products-select-component.component.html',
  styleUrls: ['./products-select-component.component.scss']
})

export class ProductsSelectComponentComponent extends BaseWidget implements OnInit {
  state: {
    items: { label: string; value: string }[];
    createURL: () => string;
    refine: (value: string) => void;
    canRefine: boolean;
    isShowingMore: boolean;
    toggleShowMore: () => void;
    canToggleShowMore: boolean;
  };

  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
      public instantSearchParent
  ) {
    super('MenuSelect');
    console.log('elo');
  }

  public ngOnInit() {
    console.log('connectMenu', connectMenu);
    this.createWidget(connectMenu, { attributeName: 'taxonomies.category' });
    super.ngOnInit();
    console.log('elo', this.state.items);
  }

  public elo (data: any) {
    console.log(';mordoe', data);
  }

}

