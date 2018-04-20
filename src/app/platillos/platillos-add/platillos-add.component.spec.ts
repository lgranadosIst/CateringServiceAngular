import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillosAddComponent } from './platillos-add.component';

describe('PlatillosAddComponent', () => {
  let component: PlatillosAddComponent;
  let fixture: ComponentFixture<PlatillosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatillosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
