import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(
    private http : HttpClient
  ) { }

  url : any = GeneralService.URL + "usuario/";


  listar(): any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  	return this.http.get(this.url + 'usuarioListar',{headers : headers}); 
  }

  insertar(form) : any
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const data = form;
  	return this.http.post(this.url + 'usuarioInsertar', data, {headers : headers}); 
  }

  actualizar(form) : any
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const data = form;
  	return this.http.post(this.url + 'usuarioUpdate', data, {headers : headers}); 
  }

  eliminar(id) : any
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  	return this.http.delete(this.url + 'usuarioeliminar' + '/'+ id , {headers : headers}); 
  }
  
  consultar(id) : any
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  	return this.http.get(this.url + 'usuarioconsultar' + '/'+ id , {headers : headers}); 
  }

}
