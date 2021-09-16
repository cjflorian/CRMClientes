import { Component, Input, OnInit } from '@angular/core';
import { Clientes } from '../models/cliente.module';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  arrClientes: any[];
  closeResult = '';
  cliente: Clientes[];
  @Input () id: number;
  @Input () nombre: string;
  @Input () apellido: string;
  @Input () email: string;
  @Input () createAt: Date;
  @Input () tipoClienteId: number;
  @Input () nombreCliente: string;

  constructor(private clienteService: ClientesService) { 
    this.arrClientes = [];
    this.cliente = [];
    this.id = 0;
    this.nombre = "";
    this.apellido = "";
    this.email = "";
    this.createAt = new Date;
    this.tipoClienteId = 0;
    this.nombreCliente = "";
  }

  ngOnInit(): void {
    this.clienteService.getAll()
    .then(clientes => this.arrClientes = clientes)
    .catch(error => console.log(console.error(error)));
    this.clienteService.getAll()
    .then( res => console.log(res[0].tipocliente.nombre));
    
  }

  /*
  async ngOnInit() {
   
    try{
      const cliente = await this.clienteService.getAll();
      console.log(cliente);
       
      let array = [];  
  for(let key in cliente){  
   if(cliente.hasOwnProperty(key)){  
     array.push(cliente[key]);  
   }  
  }  
  console.log(array);  
        }
    catch(error){
      console.log(error);
      }
    
  }
  */

  onClickEliminar(id:any){
    alert(id);
  }

  onClickModificar(id:any){
    alert(id);
    this.clienteService.callMyMethod("Jose");
  }

  async onClickDetalle(id:any){
    try{
      const cliente = await this.clienteService.getById(id);
      console.log(cliente);
      this.id = cliente.id;
      this.nombre = cliente.nombre;
      this.apellido = cliente.apellido;
      this.email = cliente.email;
      this.createAt = cliente.createAt;
        }
    catch(error){
      console.log(error);
      }
    }

}
