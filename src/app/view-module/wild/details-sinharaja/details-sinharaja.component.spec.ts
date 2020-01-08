import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSinharajaComponent } from './details-sinharaja.component';

describe('DetailsSinharajaComponent', () => {
  let component: DetailsSinharajaComponent;
  let fixture: ComponentFixture<DetailsSinharajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSinharajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSinharajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
