import { Component, OnInit } from '@angular/core';
import {Empresa} from "../empresa";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmpresaService} from "../empresa.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {
  id!: number;
  empresa!: Empresa;
  form!: FormGroup;
  isAddMode!: boolean;


  constructor(
    public empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.empresaService.find(this.id).subscribe((data: Empresa)=>{
      this.empresa = data;
    });

    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', Validators.required),
      endereco: new FormControl('', [Validators.required])

    });
    console.log(this.form)
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.empresaService.update(this.id, this.form.value).subscribe((res:any) => {
      console.log('Post updated successfully!');
      this.router.navigateByUrl('listagemEmpresa');
    })
  }
}
