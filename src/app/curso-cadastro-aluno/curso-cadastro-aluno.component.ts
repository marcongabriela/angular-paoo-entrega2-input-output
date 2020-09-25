import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro-aluno',
  templateUrl: './curso-cadastro-aluno.component.html',
  styleUrls: ['./curso-cadastro-aluno.component.css']
})
export class CursoCadastroAlunoComponent   {

@Input() curso;
@Output() novoAluno = new EventEmitter();


alunos = [
    {name: "Eli Siqueira",
    idade:"18",
    email: "siqueira.eli@gmail.com",
    curso:"Análise e Desenvolvimento de Sistemas - Noite 19H00 as 22H40"}
  ];



  onAdicionarAluno(nome,idade,email,curso){
    this.alunos=[{name: nome ,idade:idade,email: email,curso:curso}, ...this.alunos]
  }

}
