import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerSharedComponent } from './spinner-shared.component';

describe('SpinnerSharedComponent', () => {
  let component: SpinnerSharedComponent;
  let fixture: ComponentFixture<SpinnerSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerSharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
