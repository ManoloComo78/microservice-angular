import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSelectContainerComponent } from './dynamic-select-container.component';

describe('DynamicSelectContainerComponent', () => {
  let component: DynamicSelectContainerComponent;
  let fixture: ComponentFixture<DynamicSelectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSelectContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSelectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
