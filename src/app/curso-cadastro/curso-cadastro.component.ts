import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent  {

  @Output() cursoAdicionado = new EventEmitter();

  adicionar (curso){
    const listacurso = {
      curso: curso,

    };
    this.cursoAdicionado.emit(listacurso);
  }
}
