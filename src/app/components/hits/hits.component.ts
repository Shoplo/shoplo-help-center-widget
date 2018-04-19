import { Component, Input, Output,  OnInit, EventEmitter } from '@angular/core';
import { connectHits } from 'instantsearch.js/es/connectors';

import { InstantSearchService } from '../../services/instantsearch.service';

@Component({
  selector: 'app-hits',
  templateUrl: './hits.component.html',
  styleUrls: ['./hits.component.scss']
})
export class HitsComponent implements OnInit {
  // Define how your component state will look like,
  // and intialize it with an empty hits array
  @Input() searchingInProgress: boolean;
  @Output() setPost = new EventEmitter();

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
    this.instantSearchService.search.addWidget(widget());
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
    if (!this.searchingInProgress) {
      this.state = state;
    }
  }

  public handleClick (data: object) {
    this.setPost.emit(data);
  }

}
