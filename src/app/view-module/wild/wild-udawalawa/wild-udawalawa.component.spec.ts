import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildUdawalawaComponent } from './wild-udawalawa.component';

describe('WildUdawalawaComponent', () => {
  let component: WildUdawalawaComponent;
  let fixture: ComponentFixture<WildUdawalawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildUdawalawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildUdawalawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
