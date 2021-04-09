import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGenericComponent } from './button-generic.component';

describe('ButtonAComponent', () => {
  let component: ButtonGenericComponent;
  let fixture: ComponentFixture<ButtonGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
