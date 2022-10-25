import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLeftSideComponent } from './layout-left-side.component';

describe('LayoutLeftSideComponent', () => {
  let component: LayoutLeftSideComponent;
  let fixture: ComponentFixture<LayoutLeftSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLeftSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
