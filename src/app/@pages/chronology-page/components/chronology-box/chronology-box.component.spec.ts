import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronologyBoxComponent } from './chronology-box.component';

describe('ChronologyBoxComponent', () => {
  let component: ChronologyBoxComponent;
  let fixture: ComponentFixture<ChronologyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChronologyBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronologyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
