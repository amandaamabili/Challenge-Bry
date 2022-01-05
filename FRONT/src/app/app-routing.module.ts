import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {CadastroEmpresaComponent} from "./empresa/cadastro-empresa/cadastro-empresa.component"
import {CadastroFuncionariosComponent} from "./funcionarios/cadastro-funcionarios/cadastro-funcionarios.component";
import {ListagemEmpresaComponent} from "./empresa/listagem-empresa/listagem-empresa.component"
import {ListagemFuncionariosComponent} from "./funcionarios/listagem-funcionarios/listagem-funcionarios.component"
import {EmpresaDetalheComponent} from "./empresa/empresa-detalhe/empresa-detalhe.component"
import {RouterModule, Routes} from "@angular/router";
import {EditarEmpresaComponent} from "./empresa/editar-empresa/editar-empresa.component";
import {EditarFuncionariosComponent} from "./funcionarios/editar-funcionarios/editar-funcionarios.component"
import {DetalheFuncionariosComponent} from "./funcionarios/detalhe-funcionarios/detalhe-funcionarios.component"

 const  appRoutes: Routes = [
  // {path:'', redirectTo: '/cadastroEmpresas', pathMatch: 'full'},
   {path: 'cadastroEmpresa', component: CadastroEmpresaComponent},
   {path: 'cadastroFuncionarios', component: CadastroFuncionariosComponent},
   {path: 'listagemEmpresa', component: ListagemEmpresaComponent},
   {path: 'listagemFuncionarios', component: ListagemFuncionariosComponent},
   {path: 'detail/:id', component: EmpresaDetalheComponent},
   {path: 'editar/:id', component: EditarEmpresaComponent},
   {path: 'detalhefuncionario/:id', component: DetalheFuncionariosComponent},
   {path: 'editarfuncionario/:id', component: EditarFuncionariosComponent},

 ]
@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
