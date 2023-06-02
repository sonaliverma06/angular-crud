import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordsComponent } from './forgetpasswords.component';

describe('ForgetpasswordsComponent', () => {
  let component: ForgetpasswordsComponent;
  let fixture: ComponentFixture<ForgetpasswordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetpasswordsComponent]
    });
    fixture = TestBed.createComponent(ForgetpasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
