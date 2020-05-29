import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { SinglePostService } from './single-post.service';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit, OnChanges {
  @Input() postContent: any;
  @Output() goToView = new EventEmitter();

  public post: any;
  public voteStatus: any;
  public rateArticleText: any;

  constructor(
    private singlePostService: SinglePostService
  ) { }

  ngOnInit() {
    // console.log('post', this.postContent);
  }

  ngOnChanges (data: any) {
    this.voteStatus = {
      like: false,
      dislike: false
    };

    this.rateArticleText = this.singlePostService.getRateArticleText();

    if (data) {
      this.singlePostService.getPost(data.postContent.currentValue.objectID)
            .subscribe(post => {
              this.post = post;
            });
    }
  }

  public handleClick () {
    this.goToView.emit('posts');
  }

  public vote (postId: string, data: string) {
    if (data === 'like') {
      this.voteStatus = {
        like: true,
        dislike: false
      };
    } else {
      this.voteStatus = {
        like: false,
        dislike: true
      };
    }

    this.singlePostService.submitVote(postId, data)
      .subscribe(response => {
        console.log('response', response);
      });
    console.log('voted');
  }
}
