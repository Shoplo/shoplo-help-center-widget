import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgAisModule } from 'angular-instantsearch';
import { ClickOutsideModule } from 'ng-click-outside';
import { PostMessageModule } from 'ngx-post-message/ngx-post-message';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { BackToCategoriesComponent } from './components/back-to-categories/back-to-categories.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HitsComponent } from './components/hits/hits.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { CategoryIconPipe } from './pipes/category-icon.pipe';
import { StripPostContentPipe } from './pipes/strip-post-content.pipe';
import { StripRootCategoriesPipe } from './pipes/strip-root-categories.pipe';
import { StripSpacePipe } from './pipes/strip-space.pipe';
import { PostExcerptPipe } from './post-excerpt.pipe';
import { InstantSearchService } from './services/instantsearch.service';
import { LocalesService } from './services/locales.service';
import { StorageService } from './services/storage.service';
import { WindowRefService } from './services/window-ref.service';
import { WidgetComponent } from './components/widget/widget.component';
import { SinglePostService } from './components/single-post/single-post.service';
import { PostPipe } from './pipes/post.pipe';
const appRoutes: Routes = [
  { path: '', component: WidgetComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostExcerptPipe,
    HitsComponent,
    ProductsComponent,
    CategoriesComponent,
    BackToCategoriesComponent,
    SearchBoxComponent,
    StripSpacePipe,
    StripRootCategoriesPipe,
    SinglePostComponent,
    StripPostContentPipe,
    AutocompleteComponent,
    CategoryIconPipe,
    WidgetComponent,
    PostPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    NgAisModule.forRoot(),
    PostMessageModule,
    ClickOutsideModule
  ],
  providers: [
    InstantSearchService,
    StorageService,
    WindowRefService,
    LocalesService,
    SinglePostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
