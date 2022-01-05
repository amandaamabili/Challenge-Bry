import { Component, OnInit } from '@angular/core';
import {Empresa} from "../empresa";
import {EmpresaService} from "../../services/empresa.service";

@Component({
  selector: 'app-listagem-empresa',
  templateUrl: './listagem-empresa.component.html',
  styleUrls: ['./listagem-empresa.component.css']
})
export class ListagemEmpresaComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(public empresaService: EmpresaService) {
  }

  ngOnInit(): void {
    console.log("init");
    this.empresaService.getAll().subscribe((response: any)=>{
      this.empresas = response.data;
      console.log(this.empresas);
    })
  }

  deleteEmpresa(id: number) {
    this.empresaService.delete(id).subscribe(res => {
      this.empresas = this.empresas.filter(item => item.id !== id);
      console.log('Post deleted successfully!');
    })
  }
}
