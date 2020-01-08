import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHoragollaComponent } from './details-horagolla.component';

describe('DetailsHoragollaComponent', () => {
  let component: DetailsHoragollaComponent;
  let fixture: ComponentFixture<DetailsHoragollaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsHoragollaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsHoragollaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
