import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './Components/producto/producto.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { SesionComponent } from './Components/sesion/sesion.component';


const routes: Routes = [
  { path: 'Producto', component:ProductoComponent},
  { path: 'Catalogo', component: CatalogoComponent },
  { path: 'Sesion', component: SesionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
