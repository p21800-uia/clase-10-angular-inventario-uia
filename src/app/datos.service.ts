import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IIngreso, IPartida } from './IPartida';
import { ISolicitudMaterial } from './ISolicitudMaterial';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  partidasUrl = "http://localhost:8080/inventario/Partidas";
  solicitudesArchivoURL: string = '/assets/solicitudesMaterial.json';
  
  private idSolicitud: string = "";
  private idSolicitud$ = new BehaviorSubject<string>("");

  private idPartida: string = "";
  private idPartida$ = new BehaviorSubject<string>("");

  private idSubpartida: string = "";
  private idSubpartida$ = new BehaviorSubject<string>("");

  private idCategoria: string = "";
  private idCategoria$ = new BehaviorSubject<string>("");

  private solicitudesMaterial = new Observable<ISolicitudMaterial[]>();
  private partidas = new Observable<IPartida[]>();

  constructor(private http: HttpClient) 
  {     
    this.idSolicitud = ""   
  }
 
  getSolicitudesMaterial(): Observable<ISolicitudMaterial[]> {
    this.solicitudesMaterial = this.http.get<ISolicitudMaterial[]>(this.solicitudesArchivoURL);
    return this.solicitudesMaterial;    
  }

  
  setIdSolicitud(id:string)
  {
    this.idSolicitud=id;
    this.idSolicitud$.next(this.idSolicitud);;
  }
  
  setIdPartida(id:string)
  {
    this.idPartida=id;
    this.idPartida$.next(this.idPartida);;
  }

  setIdSubpartida(id:string)
  {
    this.idSubpartida=id;
    this.idSubpartida$.next(this.idSubpartida);;
  }
  
  setIdCategoria(id:string)
  {
    this.idCategoria=id;
    this.idCategoria$.next(this.idCategoria);;
  }
  
    
  getIdSolicitudMaterial(): string {
    return this.idSolicitud;
  } 
  getIdPartida(): string {
    return this.idPartida;
  }

  getIdSubpartida(): string {
    return this.idSubpartida;
  }
  getIdCategoria(): string {
    return this.idCategoria;
  }


  public getPartidas()
  {
       return this.http.get<IPartida[]>(this.partidasUrl)
      .pipe(
        tap(_ => console.log('extrayendo Partidas')),
      catchError(this.handleError<IPartida[]>('loadPartidas', []))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {      
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead      
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);      
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** POST: add a new Ingreso to the server */
public agregaIngreso(Ingreso: IIngreso): Observable<IIngreso>  {
  return this.http.post<IIngreso>(this.partidasUrl, Ingreso, this.httpOptions).pipe(
    tap((newIngreso: IIngreso) => console.log(`added Ingreso w/ name=${newIngreso.name}`)),
    catchError(this.handleError<IIngreso>('addIngreso'))
  );
}




}