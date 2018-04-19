import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  @Input() postContent: any;
  @Output() goToView = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // console.log('post', this.postContent);
  }

  public handleClick () {
    this.goToView.emit('posts');
  }

}
