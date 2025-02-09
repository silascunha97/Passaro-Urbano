import { Injectable } from '@angular/core';
import { OfertasInterface } from '../interfaces/ofertas.interface';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  public ofertas:OfertasInterface[] = []

  constructor(private http: HttpClient) { }

  public getOfertas(): Observable<OfertasInterface[]> {
    return this.http.get<OfertasInterface[]>('http://localhost:3000/ofertas?destaque=true');
  }
  
  public getOfertasCategorias(categoria: string):Observable<OfertasInterface[]> {
    return this.http.get<OfertasInterface[]>(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .pipe(
        map((ofertas: OfertasInterface[]) => {
          this.ofertas = ofertas;
          return ofertas;
        })
      );
  }
}
