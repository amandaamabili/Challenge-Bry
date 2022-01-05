import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {ListagemFuncionariosComponent} from "./listagem-funcionarios/listagem-funcionarios.component";
import {CadastroFuncionariosComponent} from "./cadastro-funcionarios/cadastro-funcionarios.component";
import {EditarFuncionariosComponent} from "./editar-funcionarios/editar-funcionarios.component";
import {DetalheFuncionariosComponent} from "./detalhe-funcionarios/detalhe-funcionarios.component";




@NgModule({
  declarations: [
    ListagemFuncionariosComponent,
    CadastroFuncionariosComponent,
    EditarFuncionariosComponent,
    DetalheFuncionariosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FuncionariosModule { }
