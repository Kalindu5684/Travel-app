import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWilpattuwaComponent } from './details-wilpattuwa.component';

describe('DetailsWilpattuwaComponent', () => {
  let component: DetailsWilpattuwaComponent;
  let fixture: ComponentFixture<DetailsWilpattuwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsWilpattuwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsWilpattuwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
