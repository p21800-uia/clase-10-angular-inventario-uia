import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component'
import { ModalPartidasComponent } from '../modal-partidas/modal-partidas.component'
import { SolicitudMaterialComponent } from '../solicitud-material/solicitud-material.component'
import { EntregaMaterialComponent } from '../entrega-material/entrega-material.component'

const routes: Routes = [
  { path: 'home', component: SolicitudMaterialComponent},
  { path: 'consultaPartidas', component: ModalPartidasComponent},
  { path: 'nuevasPartidas', component: ModalPartidasComponent},
  { path: 'solicitudesMaterial', component: SolicitudMaterialComponent},
  { path: 'ingresos', component: EntregaMaterialComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }