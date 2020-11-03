import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalesService } from '../../services/locales.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import * as _ from 'lodash';

@Injectable()
export class SinglePostService {
  private apiUrl = this.localesService.localData.wpApiUrl;
  private voteUrl = this.localesService.localData.wpVoteUrl;
  private rateArticleText = this.localesService.localData.rateArticleText;

  constructor(
    private localesService: LocalesService,
    private http: HttpClient
  ) { }

  getRateArticleText(): string {
    return this.rateArticleText;
  }

  getPost(postId: string): Observable<any> {
    const id = postId.replace('-0', '');
    return this.http.get(this.apiUrl + 'posts/' + id, {})
        .map(this.extractData)
        .catch(this.handleError);
  }

  submitVote(postId: string, vote: string) {
      console.log('this.localesService.localData', this.localesService.localData.nonce);
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': '*/*'});

    const body = new HttpParams()
    .set('action', 'kodex_posts_likes_ajax')
    .set('post_id', postId)
    .set('nonce', '4005d19c04')
    .set('btn_action', vote);
    // _.each(key in )
    return this.http.post(this.voteUrl, body, {headers: headers})
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  private handleError (error: Response | any) {
    console.log('error??', error);
      return Observable.throw(error);
  }

}
