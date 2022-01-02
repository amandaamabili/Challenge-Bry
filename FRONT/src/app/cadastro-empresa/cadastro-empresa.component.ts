import {Component, OnInit} from '@angular/core';
import {Empresa} from "../empresa";

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']

})
export class CadastroEmpresaComponent  {
  //funcionarios = ['Amanda', 'Katz',
   // 'Rossini', 'Manuel'];

  model = new Empresa(18, '', '','' ); //,this.funcionarios[0], );

  submitted = false;
  onSubmit() { this.submitted = true; }
  newEmpresa() {
    this.model = new Empresa(42, '', '','');
  }
}

