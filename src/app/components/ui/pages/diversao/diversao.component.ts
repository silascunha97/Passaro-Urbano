// Importa o decorador Component do Angular, que define um componente.
import { Component, OnInit } from '@angular/core';

// Importa o serviço OfertasService, que será usado para buscar os dados de ofertas.
import { OfertasService } from '../../../service/ofertas.service';

// Importa a interface OfertasInterface, que define o formato esperado para os dados de ofertas.
import { OfertasInterface } from '../../../interfaces/ofertas.interface';

@Component({
  selector: 'app-diversao', // Define o seletor do componente, usado para referenciá-lo no HTML.
  standalone: false, // Indica que este componente não é independente (faz parte de um módulo).
  templateUrl: './diversao.component.html', // Caminho para o arquivo de template HTML do componente.
  styleUrl: './diversao.component.scss', // Caminho para o arquivo de estilos SCSS do componente.
  providers: [OfertasService], // Declara o serviço OfertasService como um provedor para este componente.
})
export class DiversaoComponent implements OnInit {
[x: string]: any;
  
  // Declara uma propriedade pública chamada ofertas, que armazenará os dados de ofertas.
  // O operador `!` indica que a variável será inicializada antes de ser usada.
  public ofertas: OfertasInterface[] = [];

  // Construtor da classe, que injeta o serviço OfertasService como dependência.
  // Isso permite que o componente utilize os métodos do serviço para buscar dados.
  constructor(private ofertasService: OfertasService) {}

  // Método do ciclo de vida do Angular que é executado quando o componente é inicializado.
  ngOnInit() {
    // Chama o método getOfertasCategorias do serviço OfertasService, passando a categoria 'diversao'.
    this.ofertasService.getOfertasCategorias('diversao')
      .subscribe((ofertas: OfertasInterface[]) => { // Inscreve-se no Observable retornado pelo serviço.
        this.ofertas = ofertas; // Armazena os dados recebidos na propriedade ofertas.
        // console.log(this.ofertas); // (Comentado) Exibe os dados no console para depuração.
      });
  }
}
