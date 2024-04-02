import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { UsuariosComponent } from './configuracion/usuarios/usuarios.component';
import { ServicioComponent } from './servicio/servicio.component';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';
import { Reporte1Component } from './reportes/reporte1/reporte1.component';
import { Reporte2Component } from './reportes/reporte2/reporte2.component';
import { Reporte3Component } from './reportes/reporte3/reporte3.component';
import { ClientesComponent } from './configuracion/clientes/clientes.component';
import { OperadoresComponent } from './configuracion/operadores/operadores.component';
import { DocumentosComponent } from './configuracion/documentos/documentos.component';
import { ModulosComponent } from './configuracion/modulos/modulos.component';
import { PermisosComponent } from './configuracion/permisos/permisos.component';
import { RolesComponent } from './configuracion/roles/roles.component';
import { SucursalesComponent } from './configuracion/sucursales/sucursales.component';
import { UnidadesComponent } from './configuracion/unidades/unidades.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'perfil', component: PerfilComponent },
      {
        path: 'configuracion',
        children: [
          { path: 'usuarios', component: UsuariosComponent },
          { path: 'clientes', component: ClientesComponent },
          { path: 'operadores', component: OperadoresComponent },
          { path: 'unidades', component: UnidadesComponent },
          { path: 'documentos', component: DocumentosComponent },
          { path: 'roles', component: RolesComponent },
          { path: 'permisos', component: PermisosComponent },
          { path: 'modulos', component: ModulosComponent },
          { path: 'sucursales', component: SucursalesComponent },
          { path: '**', redirectTo: 'usuarios' }
        ]
      },
      { path: 'servicio', component: ServicioComponent },
      { path: 'monitoreo', component: MonitoreoComponent },
      {
        path: 'reportes',
        children: [
          { path: 'repo1', component: Reporte1Component },
          { path: 'repo2', component: Reporte2Component },
          { path: 'repo3', component: Reporte3Component },
          { path: '**', redirectTo: 'repo1' }
        ]
      },
    ]
  },
  { path: '**', redirectTo: 'perfil' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class RoutesRoutingModule { }
