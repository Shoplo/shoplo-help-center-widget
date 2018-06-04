import { Component, OnInit, Output, EventEmitter, OnChanges, OnDestroy, SimpleChange, Input } from '@angular/core';
import { connectRefinementList } from 'instantsearch.js/es/connectors';
import { noop, isFunction } from 'lodash-es';
import { InstantSearchService } from '../../services/instantsearch.service';
import { RefinementListState } from '../products/products.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit, OnChanges, OnDestroy {
  @Input() product: object;
  @Input() searchingInProgress: boolean;
  @Output() searching = new EventEmitter();
  @Output() goToView = new EventEmitter();

  public state: RefinementListState = {
    canRefine: false,
    canToggleShowMore: false,
    createURL: noop,
    isShowingMore: false,
    items: [],
    refine: noop,
    toggleShowMore: noop,
    searchForItems: noop,
    isFormSearch: false
  };
  constructor(
    private instantSearchService: InstantSearchService
  ) { }

  ngOnInit() {
    const widget = connectRefinementList(this.updateState)({
      limit: 1000,
      // showMoreLimit: 30,
      attributeName: 'taxonomies_hierarchical.category.lvl2',
      // sortBy: this.sortBy,
      escapeFacetValues: false
    });
    // Register the Hits widget into the instantSearchService search instance.
    this.instantSearchService.search.addWidget(widget);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    // console.log('changes', changes);
  }

  ngOnDestroy() {
    // console.log('destroy');
  }

  updateState = (state, isFirstRendering) => {
    // console.log('connectRefinementList updateState', state, isFirstRendering);
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve().then(() => {
        this.state = state;
      });
    }
    // console.log('connectRefinementList state', state);
    // if (!this.searchingInProgress) {
      this.state = state;
    // }
    // console.log('this.state', this.state);
  }

  public refine(
    event: MouseEvent,
    item: { isRefined: boolean; value: string }
  ) {
    event.preventDefault();
    event.stopPropagation();
    // this.searching.emit(false);
    this.goToView.emit('posts');
    // console.log('item', item);
    if (this.state.canRefine) {
      // update UI directly, it will update the checkbox state
      // item.isRefined = !item.isRefined;

      // refine through Algolia API
      this.state.refine(item.value);
    }
  }

}
