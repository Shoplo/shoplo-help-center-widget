import { TestBed, inject } from '@angular/core/testing';

import { SinglePostService } from './single-post.service';

describe('SinglePostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SinglePostService]
    });
  });

  it('should be created', inject([SinglePostService], (service: SinglePostService) => {
    expect(service).toBeTruthy();
  }));
});
