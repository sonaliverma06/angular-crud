import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudenttableComponent } from './viewstudenttable.component';

describe('ViewstudenttableComponent', () => {
  let component: ViewstudenttableComponent;
  let fixture: ComponentFixture<ViewstudenttableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewstudenttableComponent]
    });
    fixture = TestBed.createComponent(ViewstudenttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
