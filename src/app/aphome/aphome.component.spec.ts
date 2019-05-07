import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AphomeComponent } from './aphome.component';

describe('AphomeComponent', () => {
  let component: AphomeComponent;
  let fixture: ComponentFixture<AphomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AphomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
