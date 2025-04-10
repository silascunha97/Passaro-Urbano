// Importações necessárias para o funcionamento do módulo principal do Angular

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'; // Decorador NgModule e esquema para ignorar erros de templates
import { BrowserModule } from '@angular/platform-browser'; // Módulo para aplicações web e funções para hidratação do cliente
import { AppRoutingModule } from './app-routing.module'; // Módulo de roteamento da aplicação
import { AppComponent } from './app.component'; // Componente raiz da aplicação
import { TopoComponent } from './components/ui/topo/topo.component'; // Componente do topo da aplicação
import { HomeComponent } from './components/ui/home/home.component'; // Componente da página inicial
import { RodapeComponent } from './components/ui/rodape/rodape.component'; // Componente do rodapé da aplicação
import { CommonModule, NgFor } from '@angular/common'; // Módulo comum do Angular e diretiva estrutural para iteração
import { HttpClientModule } from '@angular/common/http'; // Módulo para realizar requisições HTTP e função para prover o cliente HTTP
import { RestaurantesComponent } from './components/ui/pages/restaurantes/restaurantes.component'; // Componente da página de restaurantes
import { DiversaoComponent } from './components/ui/pages/diversao/diversao.component'; // Componente da página de diversão
import { RouterModule } from '@angular/router'; // Módulo de roteamento e interface para definir rotas
import { ROUTES } from './app-routing'; // Conjunto de rotas definidas para a aplicação
import { OfertaComponent } from './components/ui/buttons/oferta/oferta.component';
import { ComoUsarComponent } from './components/ui/buttons/oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './components/ui/buttons/oferta/onde-fica/onde-fica.component'; // Componente de botão de oferta

// Decorador que define o módulo principal da aplicação
@NgModule({
  // Declaração dos componentes que pertencem a este módulo
  declarations: [
    AppComponent, // Componente raiz
    TopoComponent, // Componente do topo
    HomeComponent, // Componente da página inicial
    RodapeComponent, // Componente do rodapé
    RestaurantesComponent, // Componente da página de restaurantes
    DiversaoComponent, // Componente da página de diversão
    OfertaComponent, ComoUsarComponent, OndeFicaComponent // Componente de botão de oferta
  ],
  // Importação de outros módulos necessários para o funcionamento da aplicação
  imports: [
    RouterModule.forChild(ROUTES), // Configuração de rotas para este módulo
    BrowserModule, // Módulo necessário para aplicações Angular baseadas em navegador
    AppRoutingModule, // Módulo de roteamento da aplicação
    NgFor, // Diretiva estrutural para iteração em templates
    CommonModule, // Módulo com funcionalidades comuns do Angular
    HttpClientModule, // Módulo para realizar requisições HTTP
  ],
  // Configuração de esquemas para o Angular
  schemas: [
    NO_ERRORS_SCHEMA // Permite ignorar erros de templates relacionados a elementos desconhecidos
  ],
  // Provedores de serviços que estarão disponíveis para injeção de dependência
  providers: [
    // provideClientHydration(withEventReplay()), // Provedor para habilitar a hidratação do cliente com replay de eventos
    // provideHttpClient() // Provedor para configurar o cliente HTTP
  ],
  // Componente raiz que será inicializado ao carregar a aplicação
  bootstrap: [AppComponent]
})
// Classe que define o módulo principal da aplicação
export class AppModule { }