import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent  {
  @Input() curso;
  @Output() cursoAdicionado = new EventEmitter();


  adicionar(nomecurso,horario){
    const curso = {
      curso: nomecurso,
      horario: horario

    };
    this.cursoAdicionado.emit(curso);
  }


  estiloBotaoCadastro(){
    return{
        borderRadius: '12px',
        backgroundColor:'#20b2aa',
        borderStyle: 'none'
    }
  }
}
