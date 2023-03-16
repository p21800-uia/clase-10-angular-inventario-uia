import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatosService } from './datos.service';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalDetailsComponent } from './modal-details/modal-details.component';
import { SolicitudMaterialComponent } from './solicitud-material/solicitud-material.component';
import { ModalEditItemComponent } from './modal-edit-item/modal-edit-item.component';
import { ModalPartidasComponent } from './modal-partidas/modal-partidas.component';
import { ModalSubpartidasComponent } from './modal-subpartidas/modal-subpartidas.component';
import { ModalCategoriasComponent } from './modal-categorias/modal-categorias.component';
import { ModalItemsComponent } from './modal-items/modal-items.component';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { EntregaMaterialComponent } from './entrega-material/entrega-material.component';
import { PartidasComponent } from './partidas/partidas.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    ModalEditComponent,
    ModalDetailsComponent,
    SolicitudMaterialComponent,
    ModalEditItemComponent,
    ModalPartidasComponent,
    ModalSubpartidasComponent,
    ModalCategoriasComponent,
    ModalItemsComponent,
    EntregaMaterialComponent,
    PartidasComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,    
    MatPaginatorModule,  
    MatDialogModule, 
    FormsModule,  
    ReactiveFormsModule,
    MatIconModule,
    RoutingModule,
    MatSidenavModule,
    MatToolbarModule, 
    MatListModule,
    MatGridListModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  providers: [DatosService], 
  bootstrap: [AppComponent]
})


export class AppModule { }
