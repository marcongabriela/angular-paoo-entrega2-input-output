import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'entrega2-paoo-input-output';


 cursosadicionados = [
  {curso: 'Análise e Desenvolvimento de Sistemas'},
  {curso: 'Eventos'},
];


onAdicionarCurso (nomecurso){
  this.cursosadicionados = [nomecurso, ...this.cursosadicionados];
}
}
