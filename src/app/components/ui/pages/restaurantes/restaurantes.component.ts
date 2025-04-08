// Importa o decorador Component do Angular, que define um componente.
import { Component, OnInit } from '@angular/core';

// Importa a interface OfertasInterface, que define o formato esperado para os dados de ofertas.
import { OfertasInterface } from '../../../interfaces/ofertas.interface';

// Importa o serviço OfertasService, que será usado para buscar os dados de ofertas.
import { OfertasService } from '../../../service/ofertas.service';

// Importa o operador map da biblioteca RxJS, usado para transformar os dados emitidos por um Observable.
import { map } from 'rxjs';

@Component({
  selector: 'app-restaurantes', // Define o seletor do componente, usado para referenciá-lo no HTML.
  standalone: false, // Indica que este componente não é independente (faz parte de um módulo).
  templateUrl: './restaurantes.component.html', // Caminho para o arquivo de template HTML do componente.
  styleUrl: './restaurantes.component.scss', // Caminho para o arquivo de estilos SCSS do componente.
  providers: [OfertasService] // Declara o serviço OfertasService como um provedor para este componente.
})
export class RestaurantesComponent implements OnInit {
  // Declara uma propriedade pública chamada ofertas, que armazenará os dados de ofertas.
  // Inicializa como um array vazio do tipo OfertasInterface[].
  ofertas: OfertasInterface[] = [];

  // Construtor da classe, que injeta o serviço OfertasService como dependência.
  // Isso permite que o componente utilize os métodos do serviço para buscar dados.
  constructor(private ofertasService: OfertasService) {}

  // Método do ciclo de vida do Angular que é executado quando o componente é inicializado.
  ngOnInit(): void {
    // Chama o método getOfertasCategorias do serviço OfertasService, passando a categoria 'restaurante'.
    this.ofertasService.getOfertasCategorias('restaurante')
      .pipe(
        // Usa o operador map para transformar os dados emitidos pelo Observable.
        map((ofertas: OfertasInterface[]) => {
          this.ofertas = ofertas; // Armazena os dados recebidos na propriedade ofertas.
          return ofertas; // Retorna os dados transformados (opcional neste caso).
        })
      )
      .subscribe(); // Inscreve-se no Observable para executar a lógica e consumir os dados.
  }
}
