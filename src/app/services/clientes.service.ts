import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../models/cliente.module';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  invokeMyMethod = new EventEmitter();
  baseUrl: string;
  post: Clientes[];
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:8080/api/clientes';
    this.post =[]; 
   }//inyeccion de cliente

   getAll(): Promise<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }

  getById(pId: number): Promise<any> { // UN UNICO OBJETO
    return this.httpClient.get<any>(`${this.baseUrl}/${pId}`).toPromise();

  }

  create(post: any): Promise<any[]>{
    const bodyRequest = post;
    return this.httpClient.post<any>(this.baseUrl, bodyRequest).toPromise();
  }

  update(post: any): Promise<any[]>{
    const bodyRequest = post;
    return this.httpClient.put<any>(this.baseUrl, bodyRequest).toPromise();
  }

  delete(pId: number): Promise<any[]>{
    return this.httpClient.delete<any>(`${this.baseUrl}/${pId}`).toPromise();
  }

  callMyMethod(params: any) {
    this.invokeMyMethod.emit(params);
  }
}
