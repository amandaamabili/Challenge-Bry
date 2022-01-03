import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { ListagemFuncionariosComponent } from './listagem-funcionarios/listagem-funcionarios.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';



import {EmpresaModule} from '../app/empresa/empresa.module';
import { EditarFuncionariosComponent } from './editar-funcionarios/editar-funcionarios.component';
import { DetalheFuncionariosComponent } from './detalhe-funcionarios/detalhe-funcionarios.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CadastroFuncionariosComponent,
    ListagemFuncionariosComponent,
    EditarFuncionariosComponent,
    DetalheFuncionariosComponent,




  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EmpresaModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),*/
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
