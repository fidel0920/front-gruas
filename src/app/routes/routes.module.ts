import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { PerfilComponent } from './perfil/perfil.component';
import { RoutesRoutingModule } from './routes-routing.module';
import { UsuariosComponent } from './configuracion/usuarios/usuarios.component';
import { ClientesComponent } from './configuracion/clientes/clientes.component';
import { DocumentosComponent } from './configuracion/documentos/documentos.component';
import { ModulosComponent } from './configuracion/modulos/modulos.component';
import { OperadoresComponent } from './configuracion/operadores/operadores.component';
import { PermisosComponent } from './configuracion/permisos/permisos.component';
import { RolesComponent } from './configuracion/roles/roles.component';
import { SucursalesComponent } from './configuracion/sucursales/sucursales.component';
import { UnidadesComponent } from './configuracion/unidades/unidades.component';
import { Reporte1Component } from './reportes/reporte1/reporte1.component';
import { Reporte2Component } from './reportes/reporte2/reporte2.component';
import { Reporte3Component } from './reportes/reporte3/reporte3.component';
import { ServicioComponent } from './servicio/servicio.component';



@NgModule({
  declarations: [
    PerfilComponent,
    UsuariosComponent,
    ClientesComponent,
    UnidadesComponent,
    OperadoresComponent,
    DocumentosComponent,
    RolesComponent,
    PermisosComponent,
    ModulosComponent,
    SucursalesComponent,
    ServicioComponent,
    Reporte1Component,
    Reporte2Component,
    Reporte3Component,
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    HttpClientModule
  ]
})
export class RoutesModule { }
