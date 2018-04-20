import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillosDisplayComponent } from './platillos-display.component';

describe('PlatillosDisplayComponent', () => {
  let component: PlatillosDisplayComponent;
  let fixture: ComponentFixture<PlatillosDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatillosDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillosDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
