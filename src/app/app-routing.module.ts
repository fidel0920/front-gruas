import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoutesComponent } from './routes/routes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'inicio', component: RoutesComponent,
    loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule)
  },
  { path: '**', redirectTo: 'login' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
