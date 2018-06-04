import { Component, OnInit, SimpleChange, EventEmitter, Input, Output } from '@angular/core';
import { connectSearchBox } from 'instantsearch.js/es/connectors';

import { InstantSearchService } from '../../services/instantsearch.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  // Define SearchBox initial state
  @Input() roundInput: boolean;
  @Output() searching = new EventEmitter();
  state: { query: string; refine: Function } = {
    query: '',
    refine() {}
  };

  public focused = true;

  constructor(private instantSearchService: InstantSearchService) {}

  ngOnInit() {
    const widget = connectSearchBox(this.updateState);
    this.instantSearchService.search_autocomplete.addWidget(widget());
  }

  updateState = (state, isFirstRendering) => {
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve(null).then(() => {
        this.state = state;
      });
    }

    this.state = state;
  }

  public handleChange(query: string) {
    this.searching.emit(true);

    // if (this.searchAsYouType) {
      this.focused = true;
      this.state.refine(query);
    // }
  }

  public handleBlur (query: string) {
    setTimeout(() => {
      this.focused = false;
      this.searching.emit(false);
    }, 100);
  }

  public handleFocus (query: string) {

    if (query !== '') {
      this.focused = true;
      this.searching.emit(true);
    }
  }

  public getRoundClass () {
    let className = '';

    if (this.roundInput === true && this.focused === true) {
      className = 'active';
    }

    return className;
  }
}
