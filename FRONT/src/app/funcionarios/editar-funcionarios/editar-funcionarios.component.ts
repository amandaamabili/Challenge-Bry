import {Component, OnInit} from '@angular/core';
import {Funcionarios} from "../funcionarios";
import {FuncionariosService} from "../../services/funcionarios.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmpresaService} from "../../services/empresa.service";
import {Empresa} from "../../empresa/empresa";


@Component({
  selector: 'app-editar-funcionarios',
  templateUrl: './editar-funcionarios.component.html',
  styleUrls: ['./editar-funcionarios.component.css']
})
export class EditarFuncionariosComponent implements OnInit {
  id!: number;
  funcionario!: Funcionarios;
  form!: FormGroup;
  isAddMode!: boolean;
  empresas: Empresa[] = [];

  constructor(
    public funcionarioservice: FuncionariosService,
    public empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.empresaService.getAll().subscribe((response: any) => {
      this.empresas = response.data;
    })

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.funcionarioservice.find(this.id).subscribe((response: any) => {
      this.funcionario = response.data;
    });

    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      endereco: new FormControl('', [Validators.required]),
      empresa: new FormControl('', [Validators.required]),


    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.funcionarioservice.update(this.id, this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('listagemFuncionarios');
    })
  }
}
