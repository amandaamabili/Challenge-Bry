import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {CadastroEmpresaComponent} from "./cadastro-empresa/cadastro-empresa.component"
import {CadastroFuncionariosComponent} from "./cadastro-funcionarios/cadastro-funcionarios.component";
import {ListagemEmpresaComponent} from  "./listagem-empresa/listagem-empresa.component"
import {ListagemFuncionariosComponent} from "./listagem-funcionarios/listagem-funcionarios.component"
import {EmpresaDetalheComponent} from "./empresa-detalhe/empresa-detalhe.component"
import {RouterModule, Routes} from "@angular/router";
import {EditarEmpresaComponent} from "./editar-empresa/editar-empresa.component";

 const  appRoutes: Routes = [
  // {path:'', redirectTo: '/cadastroEmpresas', pathMatch: 'full'},
   {path: 'cadastroEmpresa', component: CadastroEmpresaComponent},
   {path: 'cadastroFuncionarios', component: CadastroFuncionariosComponent},
   {path: 'listagemEmpresa', component: ListagemEmpresaComponent},
   {path: 'listagemFuncionarios', component: ListagemFuncionariosComponent},
   {path: 'detail/:id', component: EmpresaDetalheComponent},
   {path: 'editar/:id', component: EditarEmpresaComponent}
 ]
@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
