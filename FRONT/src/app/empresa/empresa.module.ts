import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListagemEmpresaComponent} from '../listagem-empresa/listagem-empresa.component'
import  {CadastroEmpresaComponent} from '../cadastro-empresa/cadastro-empresa.component'
import {EditarEmpresaComponent} from '../editar-empresa/editar-empresa.component'
import {EmpresaDetalheComponent} from '../empresa-detalhe/empresa-detalhe.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module'




@NgModule({
  declarations: [
    ListagemEmpresaComponent,
    CadastroEmpresaComponent,
    EditarEmpresaComponent,
    EmpresaDetalheComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpresaModule { }
