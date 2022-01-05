import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Empresa} from '../empresa'
import {EmpresaService} from '../../services/empresa.service'

@Component({
  selector: 'app-empresa-detalhe',
  templateUrl: './empresa-detalhe.component.html',
  styleUrls: ['./empresa-detalhe.component.css']
})
export class EmpresaDetalheComponent implements OnInit {
  id!: number;
  empresa!: Empresa;

  constructor(
    private route: ActivatedRoute,
    private empresaService: EmpresaService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empresaService.find(this.id).subscribe((response: any)=>{
      this.empresa = response.data;
    });
  }





}
