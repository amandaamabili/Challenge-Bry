import { Component, OnInit } from '@angular/core';
import {Funcionarios} from "../funcionarios";
import {FuncionariosService} from "../funcionarios.service";

@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.component.html',
  styleUrls: ['./listagem-funcionarios.component.css']
})
export class ListagemFuncionariosComponent implements OnInit {
funcionarios: Funcionarios[] = []
  constructor(public funcionarioService: FuncionariosService) { }

  ngOnInit(): void {
    console.log("init");
    this.funcionarioService.getAll().subscribe((response: any)=>{
      this.funcionarios = response.data;
      console.log(this.funcionarios);
    })
  }

  deleteFuncionario(id: number) {
    this.funcionarioService.delete(id).subscribe(res => {
      this.funcionarios = this.funcionarios.filter(item => item.id !== id);
      console.log('Post deleted successfully!');
    })
  }

}
