import { Component, OnInit } from '@angular/core'; 
// Importa os decoradores e interfaces do Angular necessários para criar um componente e implementar o ciclo de vida OnInit.

import { ActivatedRoute } from '@angular/router'; 
// Importa o serviço ActivatedRoute para acessar informações sobre a rota ativa, como parâmetros.

import { OfertasService } from '../../../../service/ofertas.service'; 
// Importa o serviço personalizado que será usado para buscar os dados relacionados às ofertas.

@Component({
  selector: 'app-como-usar', 
  // Define o seletor do componente, que será usado no HTML para referenciar este componente.

  standalone: false, 
  // Indica que este componente não é independente e depende de um módulo Angular.

  templateUrl: './como-usar.component.html', 
  // Especifica o arquivo HTML que será usado como template para este componente.

  styleUrl: './como-usar.component.scss', 
  // Especifica o arquivo de estilos (CSS/SCSS) associado a este componente.

  providers: [ OfertasService ], 
  // Declara o serviço `OfertasService` como um provedor para este componente, permitindo sua injeção de dependência.
})
export class ComoUsarComponent implements OnInit { 
  // Define a classe do componente e implementa a interface `OnInit` para usar o método `ngOnInit`.

  respostas: any[] = []; 
  // Declara uma propriedade `respostas` que armazenará os dados recebidos da API.

  constructor(
    private route: ActivatedRoute, 
    // Injeta o serviço `ActivatedRoute` para acessar os parâmetros da rota ativa.

    private ofertaService: OfertasService, 
    // Injeta o serviço `OfertasService` para realizar chamadas à API relacionadas às ofertas.
  ) { }

  ngOnInit(): void { 
    // Método do ciclo de vida do Angular que é executado assim que o componente é inicializado.

    const ofertaId = this.route.parent!.snapshot.params['id']; 
    // Obtém o parâmetro `id` da rota pai (parent) usando o snapshot da rota ativa.

    this.ofertaService.getComoUsarOfertasById(ofertaId) 
      // Chama o método `getComoUsarOfertasById` do serviço `OfertasService`, passando o `id` da oferta.

      .subscribe((respostas: any[]) => { 
        // Inscreve-se no Observable retornado pelo serviço para receber os dados da API.

        this.respostas = respostas; 
        // Armazena os dados recebidos na propriedade `respostas`, que será usada no template.

        return this.respostas; 
        // Retorna os dados armazenados (opcional, mas não necessário aqui).
      });
  }
}


