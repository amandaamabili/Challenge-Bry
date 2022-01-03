import {Component, OnInit} from '@angular/core';
import {Empresa} from "../empresa";
import {EmpresaService} from "../empresa.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']

})
export class CadastroEmpresaComponent implements OnInit {
  form!: FormGroup;

constructor(public empresaService: EmpresaService, private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+')]),
      cnpj: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),

    });
  }
  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value);
    this.empresaService.create(this.form.value).subscribe((res:any) => {
      console.log('Post created successfully!');
      this.router.navigateByUrl('/listagemEmpresa');
    })
  }




}

