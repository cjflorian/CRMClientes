import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './clientes/cliente.component';
import { ClienteFormularioComponent } from './clientes/formulario/cliente-formulario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', component:LoginComponent},
  {path: 'clientes', component:ClienteComponent},
  {path: 'clientesformulario', component:ClienteFormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
