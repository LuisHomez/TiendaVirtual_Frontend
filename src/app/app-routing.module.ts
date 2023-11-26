import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { FinalizarCompraComponent } from './Components/finalizar-compra/finalizar-compra.component';
import { HistorialComprasComponent } from './Components/historial-compras/historial-compras.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { OpinionsComponent } from './Components/opinions/opinions.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { SesionComponent } from './Components/sesion/sesion.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { PedidoComponent } from './Components/pedido/pedido.component';
import { DetallePedidoComponent } from './Components/detalle-pedido/detalle-pedido.component';
import { FormularioUsuariosComponent } from './Forms/formulario-usuarios/formulario-usuarios.component';
import { FormFinalizarCompraComponent } from './Forms/finalizar-compra/finalizar-compra.component';
import { FormularioClientesComponent } from './Forms/formulario-clientes/formulario-clientes.component';
import { FormularioOpinionsComponent } from './Forms/formulario-opinions/formulario-opinions.component';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './Forms/form-login/form-login.component';
import { FormRegistroComponent } from './Forms/form-registro/form-registro.component';



const routes: Routes = [
  {path:"Carrito", component:CarritoComponent},
  {path:"Finalizar_compra", component:FinalizarCompraComponent},
  {path:"Historial", component:HistorialComprasComponent},
  {path:"Usuarios", component:UsuariosComponent},
  {path:"Clientes", component:ClientesComponent},
  {path:"Opinions", component:OpinionsComponent},
  {path:"producto", component:ProductoComponent},
  {path:"catalogo", component:CatalogoComponent},
  {path:"sesion", component:SesionComponent},
  {path:"usuarios", component:UsuariosComponent},
  {path:"pedido", component:PedidoComponent},
  {path:"detallePedido",component:DetallePedidoComponent},
  {path:"FormUsuarios", component:FormularioUsuariosComponent},
  {path:"FormFinalizarCompra", component:FormFinalizarCompraComponent},
  {path:"FormClientes", component:FormularioClientesComponent},
  {path:"FormOpinions", component:FormularioOpinionsComponent},
  {path:"Login", component:FormLoginComponent},
  {path:"Registro", component:FormRegistroComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
