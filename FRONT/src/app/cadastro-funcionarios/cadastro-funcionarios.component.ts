import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FuncionariosService} from "../funcionarios.service";
import {EmpresaService} from "../empresa.service";
import {Empresa} from "../empresa";

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.css']
})
export class CadastroFuncionariosComponent implements OnInit {
  form!: FormGroup;
  empresas: Empresa[] = [];
  constructor(public funcionarioservice: FuncionariosService, public empresaService: EmpresaService,private router: Router) { }

  ngOnInit(): void {
    this.empresaService.getAll().subscribe((response: any)=>{
      this.empresas = response.data;
      console.log(this.empresas);
    })
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      nome: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+')]),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      empresa: new FormControl('', Validators.required),

    });
  }
  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value);
    this.funcionarioservice.create(this.form.value).subscribe((res:any) => {
      console.log('Post created successfully!');
      this.router.navigateByUrl('/listagemFuncionarios');

    })
  }
}
