import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloAgregarComponent } from './platillo-agregar.component';

describe('PlatilloAgregarComponent', () => {
  let component: PlatilloAgregarComponent;
  let fixture: ComponentFixture<PlatilloAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
