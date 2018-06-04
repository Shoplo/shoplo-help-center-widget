import { Component, Input, Output,  OnInit, EventEmitter } from '@angular/core';
import { connectHits } from 'instantsearch.js/es/connectors';

import { InstantSearchService } from '../../services/instantsearch.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  // Define how your component state will look like,
  // and intialize it with an empty hits array
  @Input() searchingInProgress: boolean;
  @Output() setPost = new EventEmitter();
  @Output() autocompleteVisible = new EventEmitter();
  state: { hits: {}[] } = { hits: [] };

  constructor(
    private instantSearchService: InstantSearchService
  ) { }

  ngOnInit() {
    // Create a widget which will call `this.updateState` whenever
    // something changes on the search state itself
    const widget = connectHits(this.updateState);
    // console.log('dd', widget);
    // Register the Hits widget into the instantSearchService search instance.
    this.instantSearchService.search_autocomplete.addWidget(widget());
  }

  updateState = (state, isFirstRendering) => {
    // console.log('updateState', state, isFirstRendering);
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve().then(() => {
        this.state = state;
      });
    }
    // console.log('state', state);
    this.state = state;
    this.getShowClass();

  }

  public handleClick (data: object) {
    this.setPost.emit(data);
  }

  public getShowClass () {
    let className = '';

    if (this.state.hits.length > 0 && this.searchingInProgress === true) {
      className = 'active';
      this.autocompleteVisible.emit(true);
    }

    if (this.state.hits.length === 0) {
      this.autocompleteVisible.emit(false);
    }
    return className;
  }

}
