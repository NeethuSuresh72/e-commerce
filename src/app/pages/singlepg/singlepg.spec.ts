import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlepg } from './singlepg';

describe('Singlepg', () => {
  let component: Singlepg;
  let fixture: ComponentFixture<Singlepg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singlepg],
    }).compileComponents();

    fixture = TestBed.createComponent(Singlepg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
