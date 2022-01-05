import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Empresa} from '../empresa/empresa';


import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private empresaUrl = ' http://localhost:8000/api/empresa';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  };

  constructor(private http: HttpClient) {
  }

//Pega Empresas no Servidor
  getAll(): Observable<Empresa[]> {
    return this.http.get<any>(this.empresaUrl)
      .pipe(
        catchError(this.handleError<Empresa[]>('getEmpresas', []))
      );


  }


  find(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(this.empresaUrl +`/${id}`).pipe(
      catchError(this.handleError<Empresa>(`pegou empresa id=${id}`))
    );
  }


  create(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.empresaUrl, JSON.stringify(empresa), this.httpOptions).pipe(
      catchError(this.handleError<Empresa>('addEmpresa'))
    );
  }

  delete(id:  number): Observable<Empresa> {
    return this.http.delete<Empresa>(`${this.empresaUrl}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError<Empresa>())
    );
  }


update(id: number, params: any){
  return this.http.put(`${this.empresaUrl}/${id}`, params).pipe(
    catchError(this.handleError<any>('updateEmpresa'))
  );
}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);


      return of(result as T);
    };

  }


}


