import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheFuncionariosComponent } from './detalhe-funcionarios.component';

describe('DetalheFuncionariosComponent', () => {
  let component: DetalheFuncionariosComponent;
  let fixture: ComponentFixture<DetalheFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
