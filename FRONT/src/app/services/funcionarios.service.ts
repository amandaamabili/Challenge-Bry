import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Funcionarios} from '../funcionarios/funcionarios';


import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private funcionariosUrl = ' http://localhost:8000/api/funcionarios';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionarios[]> {
    return this.http.get<any>(this.funcionariosUrl)
      .pipe(
        catchError(this.handleError<Funcionarios[]>('getFuncionarios', []))
      );


  }


  find(id: number): Observable<Funcionarios> {
    return this.http.get<Funcionarios>(this.funcionariosUrl +`/${id}`).pipe(
      catchError(this.handleError<Funcionarios>(`pegou funcionario id=${id}`))
    );
  }


  create(funcionarios: Funcionarios): Observable<Funcionarios> {
    return this.http.post<Funcionarios>(this.funcionariosUrl, JSON.stringify(funcionarios), this.httpOptions).pipe(
      catchError(this.handleError<Funcionarios>('addFuncionarios'))
    );
  }

  delete(id:  number): Observable<Funcionarios> {
    return this.http.delete<Funcionarios>(this.funcionariosUrl + "/"+id, this.httpOptions).pipe(
      catchError(this.handleError<Funcionarios>())
    );
  }


  update(id: number, params: any){
    return this.http.put(`${this.funcionariosUrl}/${id}`, params).pipe(
      catchError(this.handleError<any>('updateFuncionario'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);


      return of(result as T);
    };

  }


}
