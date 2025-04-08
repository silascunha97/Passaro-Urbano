// Importa o decorador Component do Angular, que define um componente.
import { Component, OnInit } from '@angular/core';

// Importa o serviço OfertasService, que será usado para buscar os dados de ofertas.
import { OfertasService } from '../../service/ofertas.service';

// Importa a interface OfertasInterface, que define o formato esperado para os dados de ofertas.
import { OfertasInterface } from '../../interfaces/ofertas.interface';

// Importa o módulo CommonModule, que fornece diretivas comuns do Angular, como *ngIf e *ngFor.
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home', // Define o seletor do componente, usado para referenciá-lo no HTML.
  standalone: false, // Indica que este componente não é independente (faz parte de um módulo).
  templateUrl: './home.component.html', // Caminho para o arquivo de template HTML do componente.
  styleUrl: './home.component.scss', // Caminho para o arquivo de estilos SCSS do componente.
  providers: [OfertasService], // Declara o serviço OfertasService como um provedor para este componente.
})
export class HomeComponent implements OnInit {

  // Construtor da classe, que injeta o serviço OfertasService como dependência.
  // O modificador readonly indica que a propriedade não será alterada após a inicialização.
  constructor(private readonly ofertasServices: OfertasService) {}

  // Declara uma propriedade pública chamada ofertas, que armazenará os dados de ofertas.
  // Inicializa como um array vazio do tipo OfertasInterface[].
  public ofertas: OfertasInterface[] = [];

  // Método do ciclo de vida do Angular que é executado quando o componente é inicializado.
  ngOnInit(): void {
    // Chama o método getOfertas do serviço OfertasService para buscar as ofertas.
    this.ofertasServices.getOfertas()
      .subscribe((ofertas: OfertasInterface[]) => { // Inscreve-se no Observable retornado pelo serviço.
        this.ofertas = ofertas; // Armazena os dados recebidos na propriedade ofertas.
      });
  }
}
