import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsecarsComponent } from './browsecars.component';

describe('BrowsecarsComponent', () => {
  let component: BrowsecarsComponent;
  let fixture: ComponentFixture<BrowsecarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsecarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsecarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
