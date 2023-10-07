import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCaseComponent } from './show-case.component';

describe('ShowCaseComponent', () => {
  let component: ShowCaseComponent;
  let fixture: ComponentFixture<ShowCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShowCaseComponent]
    });
    fixture = TestBed.createComponent(ShowCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
