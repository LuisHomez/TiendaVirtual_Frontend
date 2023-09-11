import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { FinalizarCompraComponent } from './Components/finalizar-compra/finalizar-compra.component';
import { HistorialComprasComponent } from './Components/historial-compras/historial-compras.component';

const routes: Routes = [
  {path:"Carrito", component:CarritoComponent},
  {path:"Finalizar_compra", component:FinalizarCompraComponent},
  {path:"Historial", component:HistorialComprasComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
