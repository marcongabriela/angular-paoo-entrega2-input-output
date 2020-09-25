import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCadastroAlunoComponent } from './curso-cadastro-aluno.component';

describe('CursoCadastroAlunoComponent', () => {
  let component: CursoCadastroAlunoComponent;
  let fixture: ComponentFixture<CursoCadastroAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoCadastroAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoCadastroAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
