import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSelectComponentComponent } from './products-select-component.component';

describe('ProductsSelectComponentComponent', () => {
  let component: ProductsSelectComponentComponent;
  let fixture: ComponentFixture<ProductsSelectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSelectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
