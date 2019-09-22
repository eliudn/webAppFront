import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponentComponent } from './listar-component.component';

describe('ListarComponentComponent', () => {
  let component: ListarComponentComponent;
  let fixture: ComponentFixture<ListarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
