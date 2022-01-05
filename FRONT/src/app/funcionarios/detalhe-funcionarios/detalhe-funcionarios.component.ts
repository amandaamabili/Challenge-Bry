import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Funcionarios} from "../funcionarios";
import {FuncionariosService} from "../../services/funcionarios.service";
import {EmpresaService} from "../../services/empresa.service";

@Component({
  selector: 'app-detalhe-funcionarios',
  templateUrl: './detalhe-funcionarios.component.html',
  styleUrls: ['./detalhe-funcionarios.component.css']
})
export class DetalheFuncionariosComponent implements OnInit {
  id!: number;
  funcionario!: Funcionarios;
  constructor(
    private route: ActivatedRoute,
    private funcionarioservice: FuncionariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.funcionarioservice.find(this.id).subscribe((response: any)=>{
      this.funcionario = response.data;
    });
  }

}
