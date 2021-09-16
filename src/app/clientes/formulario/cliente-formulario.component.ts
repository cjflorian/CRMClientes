import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.css']
})


export class ClienteFormularioComponent implements OnInit {
  formNewCliente: FormGroup;

  constructor(private clienteService: ClientesService, private router: Router) { 
    this.formNewCliente = new FormGroup({
      nombre: new FormControl('',[
        Validators.required
      ]),
      apellido: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required
      ]),
      tipo_cliente_id: new FormControl('',[
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  
  onSubmit(){
    console.log(this.formNewCliente.value);
    this.clienteService.create(this.formNewCliente.value);
    this.router.navigate(['/clientes']);
    Swal.fire('Nuevo cliente','Cliente');

  }
  keyword = 'name';
  public countries = [
    {
      id: 1,
      name: 'Albania',
    },
    {
      id: 2,
      name: 'Belgium',
    },
    {
      id: 3,
      name: 'Denmark',
    },
    {
      id: 4,
      name: 'Montenegro',
    },
    {
      id: 5,
      name: 'Turkey',
    },
    {
      id: 6,
      name: 'Ukraine',
    },
    {
      id: 7,
      name: 'Macedonia',
    },
    {
      id: 8,
      name: 'Slovenia',
    },
    {
      id: 9,
      name: 'Georgia',
    },
    {
      id: 10,
      name: 'India',
    },
    {
      id: 11,
      name: 'Russia',
    },
    {
      id: 12,
      name: 'Switzerland',
    }
  ];
    selectEvent(item:any) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e:any) {
    // do something
  }


}
