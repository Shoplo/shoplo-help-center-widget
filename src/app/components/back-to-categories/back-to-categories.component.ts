import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { connectClearAll } from 'instantsearch.js/es/connectors';
import { noop } from 'lodash-es';
import { InstantSearchService } from '../../services/instantsearch.service';

@Component({
  selector: 'app-back-to-categories',
  templateUrl: './back-to-categories.component.html',
  styleUrls: ['./back-to-categories.component.scss']
})
export class BackToCategoriesComponent implements OnInit {
  @Output() goToView = new EventEmitter();
  public state = { hasRefinements: false, refine: noop };
  constructor(
    private instantSearchService: InstantSearchService
  ) { }

  ngOnInit() {
    const widget = connectClearAll(this.updateState)({
      clearsQuery: true,
      // we want to go back tu current product categories, so we have to exclude those from clearing query
      excludeAttributes: ['taxonomies_hierarchical.category.lvl0', 'taxonomies_hierarchical.category.lvl1']
      // showMoreLimit: 30,
      // attributeName: 'taxonomies_hierarchical.category.lvl2',
      // sortBy: this.sortBy,
      // escapeFacetValues: true
    });
    // Register the Hits widget into the instantSearchService search instance.
    this.instantSearchService.search.addWidget(widget);
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
    this.state = state;
  }
  public handleClick(event: MouseEvent) {
      event.preventDefault();

      if (this.state.hasRefinements) {
        this.state.refine();
      }

      this.goToView.emit('categories');
  }
}
