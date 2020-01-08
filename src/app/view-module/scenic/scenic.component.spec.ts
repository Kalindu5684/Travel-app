import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenicComponent } from './scenic.component';

describe('ScenicComponent', () => {
  let component: ScenicComponent;
  let fixture: ComponentFixture<ScenicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
