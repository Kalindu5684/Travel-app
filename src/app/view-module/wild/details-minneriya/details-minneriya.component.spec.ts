import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMinneriyaComponent } from './details-minneriya.component';

describe('DetailsMinneriyaComponent', () => {
  let component: DetailsMinneriyaComponent;
  let fixture: ComponentFixture<DetailsMinneriyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMinneriyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMinneriyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
