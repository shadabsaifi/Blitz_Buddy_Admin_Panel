import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticManagementComponent } from './static-management.component';

describe('StaticManagementComponent', () => {
  let component: StaticManagementComponent;
  let fixture: ComponentFixture<StaticManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
