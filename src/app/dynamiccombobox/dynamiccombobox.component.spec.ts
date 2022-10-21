import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccomboboxComponent } from './dynamiccombobox.component';

describe('DynamiccomboboxComponent', () => {
  let component: DynamiccomboboxComponent;
  let fixture: ComponentFixture<DynamiccomboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiccomboboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiccomboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
