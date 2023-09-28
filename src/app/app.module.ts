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
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    MenuComponent,
    CarritoComponent,
    FinalizarCompraComponent,
    HistorialComprasComponent,
    ClientesComponent,
    OpinionsComponent
  ],
  imports: [
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserModule,
    HttpClientModule,
    AvatarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AvatarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
