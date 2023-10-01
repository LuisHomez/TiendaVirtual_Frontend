import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './Components/producto/producto.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { SesionComponent } from './Components/sesion/sesion.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { PedidoComponent } from './Components/pedido/pedido.component';
import { DetallePedidoComponent } from './Components/detalle-pedido/detalle-pedido.component';


const routes: Routes = [
  { path: 'producto', component:ProductoComponent},
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'sesion', component: SesionComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'detallePedido', component: DetallePedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
