// Importa o decorador Injectable do Angular, que permite que a classe seja usada como um serviço injetável.
import { Injectable } from '@angular/core';

// Importa a interface OfertasInterface, que define o formato esperado para os dados de ofertas.
import { OfertasInterface } from '../interfaces/ofertas.interface';

// Importa o HttpClient do Angular, usado para realizar requisições HTTP.
import { HttpClient } from '@angular/common/http';

// Importa o operador map e o tipo Observable da biblioteca RxJS.
// - Observable é usado para lidar com fluxos de dados assíncronos.
// - map é um operador que transforma os dados emitidos por um Observable.
import { map, Observable } from 'rxjs';

import { URL_API } from '../api/app.api'; // Importa a constante API, que contém a URL base da API.

@Injectable({
  providedIn: 'root' // Registra o serviço no nível raiz da aplicação, tornando-o disponível globalmente.
})
export class OfertasService {

  //private url_API: string = 'http://localhost:3000/ofertas'; // URL base para as requisições de ofertas.

  // Declara uma propriedade pública chamada ofertas, que armazena localmente um array de ofertas.
  // O tipo é OfertasInterface[], garantindo que os dados estejam no formato esperado.
  public ofertas: OfertasInterface[] = [];


  // Construtor da classe, que injeta o serviço HttpClient como dependência.
  // Isso permite que o serviço realize requisições HTTP.
  constructor(private http: HttpClient) { }

  // Método público que retorna um Observable contendo um array de ofertas em destaque.
  public getOfertas(): Observable<OfertasInterface[]> {
    // Faz uma requisição HTTP do tipo GET para a URL especificada.
    // A resposta esperada é um array de objetos no formato definido por OfertasInterface.
    return this.http.get<OfertasInterface[]>(`${URL_API}?destaque=true`);
  }
  
  // Método público que retorna um Observable contendo um array de ofertas filtradas por categoria.
  public getOfertasCategorias(categoria: string): Observable<OfertasInterface[]> {
    // Faz uma requisição HTTP do tipo GET para a URL com o parâmetro de categoria.
    return this.http.get<OfertasInterface[]>(`${URL_API}?categoria=${categoria}`)
      .pipe(
        // Usa o operador map para transformar os dados emitidos pelo Observable.
        map((ofertas: OfertasInterface[]) => {
          // Armazena as ofertas na propriedade local this.ofertas.
          this.ofertas = ofertas;
          // Retorna as ofertas transformadas.
          return ofertas;
        })
      );
  }

  public getOfertasById(id: number): Observable<OfertasInterface[]> {
    return this.http.get<OfertasInterface[]>(`${URL_API}?id=${id}`)
      .pipe(
        // Usa o operador map para transformar os dados emitidos pelo Observable.
        map((ofertas: OfertasInterface[]) => {
          // Armazena as ofertas na propriedade local this.ofertas.
          this.ofertas = ofertas;
          // Retorna as ofertas transformadas.
          return ofertas;
        })
      )
  }
}
