import { Component, AfterViewInit } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { IPostMessageBridge, IPostMessageEventTarget, PostMessageBridgeFactory } from 'ngx-post-message/ngx-post-message';
import { NgAisModule } from 'angular-instantsearch';
import { environment } from '../environments/environment';
import { InstantSearchService } from './services/instantsearch.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public config = environment.algolia;
  public selectedProduct = {};
  public searchingInProgress = false;
  public showProducts = false;
  public currentView = 'categories';
  public postContent: object;
  public roundInput = false;

  constructor(
    private bridgeFactory: PostMessageBridgeFactory,
    private instantSearchService: InstantSearchService
  ) {
    /**
     * IFrame context
     */
    const iFrame: IPostMessageEventTarget = window;
    const parentWindow: IPostMessageEventTarget = window.top;

      // The main usage scenario
    bridgeFactory.makeInstance()
      .setEnableLogging(true)            // By default, the smart logger is enabled
      .connect(iFrame, parentWindow)
      .makeBridge('Logout')
      .makeBridge('ChangeLanguage')
      // tslint:disable-next-line:max-line-length
      .addListener('ChangeLanguage', (message: any) => console.log(`The parent has sent a message to the iframe - set a new language as: ${message}`))
      .sendMessage('Logout');

    // The additional usage scenario
    // You can also use the direct native mechanism of sending the message (if the external application does not use Angular2)
    window.top.postMessage([{channel: 'Logout)'}], '*');
  }

  ngAfterViewInit() {
    this.instantSearchService.search.start();
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
    this.selectedProduct = item;
  }

  public searching (data: any) {
    this.searchingInProgress = data;
  }

  public goToView (view: string) {
    this.currentView = view;
  }

  public setPost (data: any) {
    console.log('setPost', data);
    this.currentView = 'post';
    this.postContent = data;
  }

  public autocompleteVisible (data: boolean) {
    this.roundInput = data;
  }

}
