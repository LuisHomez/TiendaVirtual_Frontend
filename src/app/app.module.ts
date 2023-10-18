import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AvatarModule } from 'ngx-avatars';
import { HttpClientModule } from '@angular/common/http';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { FinalizarCompraComponent } from './Components/finalizar-compra/finalizar-compra.component';
import { HistorialComprasComponent } from './Components/historial-compras/historial-compras.component';
import { OpinionsComponent } from './Components/opinions/opinions.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { MatSortModule } from '@angular/material/sort';
import { SesionComponent } from './Components/sesion/sesion.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { ProductoComponent } from './Components/producto/producto.component'
import { PedidoComponent } from './Components/pedido/pedido.component';
import { DetallePedidoComponent } from './Components/detalle-pedido/detalle-pedido.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { FormularioUsuariosComponent } from './Forms/formulario-usuarios/formulario-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    MenuComponent,
    CarritoComponent,
    FinalizarCompraComponent,
    HistorialComprasComponent,
    ClientesComponent,
    OpinionsComponent,
    SesionComponent,
    CatalogoComponent,
    ProductoComponent,
    PedidoComponent,
    DetallePedidoComponent,
    FormularioUsuariosComponent,
    
  ],
  imports: [
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
