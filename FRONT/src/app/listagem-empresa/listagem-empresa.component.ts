import { Component, OnInit } from '@angular/core';
import {Empresa} from "../empresa";
import {EmpresaService} from "../empresa.service";

@Component({
  selector: 'app-listagem-empresa',
  templateUrl: './listagem-empresa.component.html',
  styleUrls: ['./listagem-empresa.component.css']
})
export class ListagemEmpresaComponent implements OnInit {
empresas:Empresa[] = [];
  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(): void {
    this.empresaService.getEmpresas()
      .subscribe(empresas => this.empresas = empresas);
  }
}
