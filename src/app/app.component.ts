import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'entrega2-paoo-input-output';

  exibirPagina(){
    this.exibirCadastro = !this.exibirCadastro;
    this.exibirAluno = !this.exibirAluno;
  }
  exibirCadastro: boolean = true;
  exibirAluno: boolean = false;

//  cursosadicionados = [
//   {curso: 'Análise e Desenvolvimento de Sistemas'},
//   {curso: 'Eventos'},
// ];

cursos = [
  {curso:"Análise e Desenvolvimento de Sistemas", horario:	"Noite 19H00 as 22H40"},
  {curso:"Análise e Desenvolvimento de Sistemas", horario:	"Tarde 13H00 as 18H30"},
  {curso:"Eventos", horario:	"Manhã 8H00 as 13H30"},
  {curso:"Gestão Comercial", horario:	"Manhã 8H00 as 13H30"},
  {curso:"Gestão Comercial", horario:	"Noite 19H00 as 22H40"},
  {curso:"Recursos Humanos", horario:	"Noite 19H00 as 22H40"},
  {curso:"Gestão Empresarial", horario:	"EAD – Ensino à distância"}
];

onAdicionarCurso(curso) {
  this.cursos = [curso, ...this.cursos];
}




}

