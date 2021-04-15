import { ComponentFixture, TestBed } from '@angular/core/testing';

import { checkout } from './checkout.component';

describe('CartComponent', () => {
  let component: checkout;
  let fixture: ComponentFixture<checkout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ checkout ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(checkout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
