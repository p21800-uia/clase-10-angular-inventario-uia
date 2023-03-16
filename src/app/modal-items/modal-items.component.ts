import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../datos.service'
import { ICategoria, IPartida, ISubpartida }  from '../IPartida'
import { Router } from '@angular/router';
import { IItem } from '../ISolicitudMaterial';

@Component({
  selector: 'app-modal-items',
  templateUrl: './modal-items.component.html',
  styleUrls: ['./modal-items.component.css']
})


export class ModalItemsComponent implements OnInit  {
  categorias: ICategoria[] = [];
  subpartidas: ISubpartida[] = [];
  items: IItem[] = [];
  pageActual:number=1;
  urlaccion:string = 'assets/icon-tabla/';
  //Material table columns
  displayedColumns: string[] = ['id', 'idPartida', 'idSubpartida', 'idCategoria', 'idProveedor', 'nameCategoria', 'nameSubpartida'];
  //Table Data Source
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //Dynamic Data Variable
  data: any;
  public totalRows = 0;
  idPartida: any;
  idSubPartida: any;
  idCategoria: any;
  form: FormGroup | undefined;

   constructor(public datosPartida:DatosService,  public modal: MatDialog, private Nav: Router) 
   {     
    this.idPartida = this.datosPartida.getIdPartida();
    this.idSubPartida = this.datosPartida.getIdSubpartida();
    this.idCategoria = this.datosPartida.getIdCategoria();

    this.datosPartida.getPartidas().subscribe((data: IPartida[])=>{
      console.log(data);

      data.forEach(p => {
        if(p.idPartida === this.idPartida)
        {
          this.subpartidas = p.subpartidas;
          this.subpartidas.forEach(q => {
            if(q.idSubpartida === this.idSubPartida)
            {
              this.categorias = q.categorias;
              this.categorias.forEach(r => {
                if(r.id === this.idCategoria)
                {
                  this.items = r.items;
                  console.log(this.items);
                }
              })
              console.log(this.categorias);
            }
          })
        }
          console.log(this.categorias);
        }
      )
    })

  }
                
   ngOnInit(): void {
                
    this.idPartida = this.datosPartida.getIdPartida();
    this.idSubPartida = this.datosPartida.getIdSubpartida();
    this.idCategoria = this.datosPartida.getIdCategoria();

    this.datosPartida.getPartidas().subscribe((data: IPartida[])=>{
      console.log(data);

      data.forEach(p => {
        if(p.idPartida === this.idPartida)
        {
          this.subpartidas = p.subpartidas;
          this.subpartidas.forEach(q => {
            if(q.idSubpartida === this.idSubPartida)
            {
              this.categorias = q.categorias;
              this.categorias.forEach(r => {
                if(r.id === this.idCategoria)
                {
                  this.items = r.items;
                  console.log(this.items);
                }
              })
              console.log(this.categorias);
            }
          })
        }
          console.log(this.categorias);
        }
      )
    })

  }




  onCheckboxChange(e: any) {
    
  }
    
  submit(){
    
  }
  
  }
       
  