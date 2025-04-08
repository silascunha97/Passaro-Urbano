// Importa o decorador NgModule do Angular, que é usado para definir um módulo.
import { NgModule } from '@angular/core';

// Importa o módulo ServerModule do Angular, que habilita a renderização no lado do servidor (Server-Side Rendering - SSR).
import { ServerModule } from '@angular/platform-server';

// Importa funções e tipos relacionados à configuração de rotas no lado do servidor.
import { provideServerRoutesConfig, ServerRoute } from '@angular/ssr';

// Importa o componente raiz da aplicação.
import { AppComponent } from './app.component';

// Importa o módulo principal da aplicação.
import { AppModule } from './app.module';

// Importa as rotas específicas para o lado do servidor.
import { serverRoutes } from './app.routes.server';

// Filtra as rotas do servidor para incluir apenas aquelas que possuem a propriedade 'renderMode'.
// Isso é útil para configurar rotas específicas para renderização no lado do servidor.
const filteredServerRoutes: ServerRoute[] = serverRoutes.filter(route => 'renderMode' in route);

@NgModule({
  // Declara os módulos que serão importados neste módulo.
  imports: [
    AppModule, // Importa o módulo principal da aplicação.
    ServerModule // Importa o módulo que habilita a renderização no lado do servidor.
  ],
  // Declara os provedores de serviços para este módulo.
  providers: [
    provideServerRoutesConfig(filteredServerRoutes) // Configura as rotas filtradas para o lado do servidor.
  ],
  // Declara o componente raiz que será inicializado ao carregar o módulo.
  bootstrap: [AppComponent],
})
// Define o módulo de renderização no lado do servidor.
export class AppServerModule {}
