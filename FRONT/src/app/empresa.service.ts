import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Empresa} from './empresa';
import {EMPRESA} from "./mock-empresa";
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private messageService: MessageService) { }

  getEmpresas(): Observable<Empresa[]>{
    const empresas = of(EMPRESA);
    this.messageService.add('Empresa ');
    return  empresas;
  }

  getEmpresa(id: number) : Observable<Empresa>{
    const empresa = EMPRESA.find(h => h.id === id)!;
    this.messageService.add(`Empresa com id= ${id}`);
    return of(empresa)
  }
}
