import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Empresa} from '../empresa'
import {EmpresaService} from '../empresa.service'

@Component({
  selector: 'app-empresa-detalhe',
  templateUrl: './empresa-detalhe.component.html',
  styleUrls: ['./empresa-detalhe.component.css']
})
export class EmpresaDetalheComponent implements OnInit {
  empresa: Empresa | undefined;

  constructor(
    private route: ActivatedRoute,
    private empresaService: EmpresaService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getEmpresa();
  }

  getEmpresa(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empresaService.getEmpresa(id)
      .subscribe(empresa => this.empresa = empresa);
  }

  goBack(): void {
    this.location.back();
  }
}
