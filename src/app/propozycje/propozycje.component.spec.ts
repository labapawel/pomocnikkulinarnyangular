import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropozycjeComponent } from './propozycje.component';

describe('PropozycjeComponent', () => {
  let component: PropozycjeComponent;
  let fixture: ComponentFixture<PropozycjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropozycjeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropozycjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
