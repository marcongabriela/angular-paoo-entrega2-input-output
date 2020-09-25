import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoCartaoComponent } from './curso-cartao/curso-cartao.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { CursoCadastroAlunoComponent } from './curso-cadastro-aluno/curso-cadastro-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoCartaoComponent,
    CursoCadastroComponent,
    CursoCadastroAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
