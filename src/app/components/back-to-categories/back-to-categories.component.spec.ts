import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToCategoriesComponent } from './back-to-categories.component';

describe('BackToCategoriesComponent', () => {
  let component: BackToCategoriesComponent;
  let fixture: ComponentFixture<BackToCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
