import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { connectHierarchicalMenu } from 'instantsearch.js/es/connectors';
import { noop, isFunction, each, find } from 'lodash-es';
import { InstantSearchService } from '../../services/instantsearch.service';
import { HierarchicalMenuState } from './products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit, OnChanges {

  @Input() show: boolean;
  @Output() public selectProduct = new EventEmitter<string>();

  public state: HierarchicalMenuState = {
    createURL: noop,
    items: [],
    refine: noop
  };
  public selectedProduct = 'Shoplo Store';

  constructor(
    private instantSearchService: InstantSearchService
  ) { }


  /**
   * FIXME:
   * - set rootPath as variable
   */

  ngOnInit() {
    const widget = connectHierarchicalMenu(this.updateState)({
      limit: 100,
      // showMoreLimit: 30,
      attributes: ['taxonomies_hierarchical.category.lvl0', 'taxonomies_hierarchical.category.lvl1'],
      showParentLevel: false,
      sortBy: ['count'],
      rootPath: 'Instrukcje'
    });
    // Register the Hits widget into the instantSearchService search instance.
    this.instantSearchService.search.addWidget(widget);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    // console.log('changes', changes);
  }

  updateState = (state, isFirstRendering) => {
    if (isFirstRendering) {
      return Promise.resolve().then(() => {
        this.state = state;
      });
    }
    // load top level categorties only once, dont update them on search anf refinement toggle
    if (this.state.items.length === 0) {
      this.state = state;
      const initItem = find(this.state.items, {'label': this.selectedProduct});
      if (initItem) {
        setTimeout( () => {
          this.makeSelection(initItem);
        }, 0);
      }
    }
  }

  public refine ( event: MouseEvent, item: { value: string; selected: boolean; }) {
    event.preventDefault();
    event.stopPropagation();
    if (!item.selected) {
      this.makeSelection(item);
    }
  }

  public makeSelection (item: any) {
    this.state.refine(item.value);

    each(this.state.items, function (value: any) {
      value.selected = false;
    });
    item.selected = true;

    this.selectProduct.emit(item.value);
  }

  public getItemClass (item: any) {
    let className = 'product-menu-item';

    if (item.selected) {
      className = className + ' selected';
    }

    return className;
  }

  public getShowClass () {
    let className = '';

    if (this.show === true) {
      className = 'active';
    }
    return className;
  }
}
