import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDisplayComponent } from './clientes-display.component';

describe('ClientesDisplayComponent', () => {
  let component: ClientesDisplayComponent;
  let fixture: ComponentFixture<ClientesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
