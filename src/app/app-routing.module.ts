import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './components/usuarios/listar/listar.component';
import { InsertarComponent } from './components/usuarios/insertar/insertar.component';
import { ActualizarComponent } from './components/usuarios/actualizar/actualizar.component';



const routes: Routes = [
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
  { path: 'listar', component: ListarComponent },
  { path: 'insertar', component: InsertarComponent },
  { path: 'actualizar/:id', component: ActualizarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
