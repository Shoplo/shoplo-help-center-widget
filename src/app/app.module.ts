import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAisModule } from 'angular-instantsearch';
import { ClickOutsideModule } from 'ng-click-outside';
import { PostMessageModule } from 'ngx-post-message/ngx-post-message';
import { AppComponent } from './app.component';
import { BackToCategoriesComponent } from './components/back-to-categories/back-to-categories.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HitsComponent } from './components/hits/hits.component';
import { ProductsSelectComponentComponent } from './components/products-select-component/products-select-component.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { StripSpacePipe } from './pipes/strip-space.pipe';
import { PostExcerptPipe } from './post-excerpt.pipe';
import { InstantSearchService } from './services/instantsearch.service';
import { StorageService } from './services/storage.service';
import { StripRootCategoriesPipe } from './pipes/strip-root-categories.pipe';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { StripPostContentPipe } from './pipes/strip-post-content.pipe';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    PostExcerptPipe,
    ProductsSelectComponentComponent,
    HitsComponent,
    ProductsComponent,
    CategoriesComponent,
    BackToCategoriesComponent,
    SearchBoxComponent,
    StripSpacePipe,
    StripRootCategoriesPipe,
    SinglePostComponent,
    StripPostContentPipe,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    NgAisModule.forRoot(),
    PostMessageModule,
    ClickOutsideModule
  ],
  providers: [
    InstantSearchService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
