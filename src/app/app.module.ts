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

import { HttpClientModule } from '@angular/common/http';
// Import your AvatarModule
import { AvatarModule } from 'ngx-avatars';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { FinalizarCompraComponent } from './Components/finalizar-compra/finalizar-compra.component';
import { HistorialComprasComponent } from './Components/historial-compras/historial-compras.component';




@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    MenuComponent,
    CarritoComponent,
    FinalizarCompraComponent,
    HistorialComprasComponent
  ],
  imports: [
    BrowserModule,
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
