import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { OpinionsComponent } from './Components/opinions/opinions.component';


const routes: Routes = [
  {path:"Usuarios", component:UsuariosComponent},
  {path:"Clientes", component:ClientesComponent},
  {path:"Opinions", component:OpinionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
