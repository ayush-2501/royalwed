import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquetHallComponent } from './banquet-hall.component';

describe('BanquetHallComponent', () => {
  let component: BanquetHallComponent;
  let fixture: ComponentFixture<BanquetHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanquetHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanquetHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
