import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPostMessageEventTarget, PostMessageBridgeFactory } from 'ngx-post-message/ngx-post-message';
import { InstantSearchService } from '../../services/instantsearch.service';
import { LocalesService } from '../../services/locales.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements AfterViewInit {

  public selectedProduct = {};
  public searchingInProgress = false;
  public showProducts = false;
  public currentView = 'categories';
  public postContent: object;
  public roundInput = false;
  public merchantSource = 'shoplo';

  constructor(
    private bridgeFactory: PostMessageBridgeFactory,
    private instantSearchService: InstantSearchService,
    private activatedRoute: ActivatedRoute,
    private locale: LocalesService,
  ) {
    /**
     * IFrame context
     */
    const iFrame: IPostMessageEventTarget = window;
    const parentWindow: IPostMessageEventTarget = window.top;
    this.merchantSource = this.locale.merchantSource;

      // The main usage scenario
    // bridgeFactory.makeInstance()
      // .setEnableLogging(true)            // By default, the smart logger is enabled
      // .connect(iFrame, parentWindow)
      // .makeBridge('Logout')
      // .makeBridge('ChangeLanguage')
      // tslint:disable-next-line:max-line-length
      // .addListener('ChangeLanguage', (message: any) => console.log(`The parent has sent a message to the iframe - set a new language as: ${message}`))
      // .sendMessage('Logout');

    // The additional usage scenario
    // You can also use the direct native mechanism of sending the message (if the external application does not use Angular2)
    // window.top.postMessage([{channel: 'Logout)'}], '*');
  }

  ngAfterViewInit() {
    this.instantSearchService.search.start();
    this.instantSearchService.search_autocomplete.start();
  }

  // Click outside products popup
  onClickedOutside(e: Event) {
    this.showProducts = false;
    // console.log('onClickedOutside', this.showProducts);
  }

  public showProductPopup () {
    this.showProducts = true;
    // console.log('showProductPopup', this.showProducts);
  }

  public closeWidget () {
    // console.log('close it');
    window.top.postMessage([{channel: 'Close it)'}], '*');
  }

  public selectProduct (item: string) {
    // console.log('selectProduct', item);
    this.showProducts = false;
    this.currentView = 'categories';
    this.selectedProduct = item;
  }

  public searching (data: any) {
    this.searchingInProgress = data;
  }

  public goToView (view: string) {
    this.currentView = view;
  }

  public setPost (data: any) {
    this.currentView = 'post';
    this.postContent = data;
  }

  public autocompleteVisible (data: boolean) {
    this.roundInput = data;
  }

}
