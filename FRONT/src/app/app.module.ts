import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { ListagemEmpresaComponent } from './listagem-empresa/listagem-empresa.component';
import { ListagemFuncionariosComponent } from './listagem-funcionarios/listagem-funcionarios.component';
import { EmpresaDetalheComponent } from './empresa-detalhe/empresa-detalhe.component';
import {FormsModule} from "@angular/forms";
//import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CadastroEmpresaComponent,
    CadastroFuncionariosComponent,
    ListagemEmpresaComponent,
    ListagemFuncionariosComponent,
    EmpresaDetalheComponent,
    //ReactiveFormsModule

  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
