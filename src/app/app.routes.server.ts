// Importa o enum RenderMode e a interface ServerRoute do módulo '@angular/ssr'.
// RenderMode é usado para definir o modo de renderização (ex.: Prerender).
// ServerRoute é uma interface específica para rotas no contexto de renderização do lado do servidor.
import { RenderMode, ServerRoute } from '@angular/ssr';

// Importa a interface Route do módulo '@angular/router'.
// Route é usada para definir rotas padrão no Angular.
import { Route } from '@angular/router';

// Define um array de rotas que podem ser do tipo ServerRoute ou Route.
// Essas rotas são usadas para configurar o roteamento no lado do servidor.
export const serverRoutes: (ServerRoute | Route)[] = [
  {
    // Define uma rota curinga (**) que captura qualquer caminho não definido.
    // Isso é útil para lidar com páginas não encontradas (404).
    path: '**',
    // Define o modo de renderização como "Prerender".
    // Isso significa que a página será pré-renderizada no servidor.
    renderMode: RenderMode.Prerender
  },
  {
    // Define uma rota para o caminho 'diversao'.
    path: 'diversao',
    // Usa carregamento tardio (lazy loading) para importar o módulo ou componente associado.
    // O componente DiversaoComponent será carregado apenas quando a rota for acessada.
    loadChildren: () => import('./components/ui/pages/diversao/diversao.component').then(m => m.DiversaoComponent)
  },
  {
    // Define uma rota para o caminho 'restaurante'.
    path: 'restaurante',
    // Usa carregamento tardio para importar o módulo ou componente associado.
    // O componente RestaurantesComponent será carregado apenas quando a rota for acessada.
    loadChildren: () => import('./components/ui/pages/restaurantes/restaurantes.component').then(m => m.RestaurantesComponent)
  },
  {
    // Define uma rota para o caminho 'oferta'.
    path: 'oferta',
    // Usa carregamento tardio para importar o módulo ou componente associado.
    // O componente OfertaComponent será carregado apenas quando a rota for acessada.
    loadChildren: () => import('./components/ui/buttons/oferta/oferta.component').then(m => m.OfertaComponent)
  },
  {
    // Define uma rota para o caminho 'oferta/:id', onde ':id' é um parâmetro dinâmico.
    // Isso permite acessar diferentes ofertas com base no ID fornecido na URL.
    path: 'oferta/:id',
    // Usa carregamento tardio para importar o módulo ou componente associado.
    // O componente OfertaComponent será carregado apenas quando a rota for acessada.
    loadChildren: () => import('./components/ui/buttons/oferta/oferta.component').then(m => m.OfertaComponent)
  },
  {
    // Define uma rota para o caminho 'Onde-Fica', onde ':id' é um parâmetro dinâmico.
    // Isso permite acessar diferentes ofertas com base no ID fornecido na URL.
    path: 'oferta/:id/onde-fica',
    // Usa carregamento tardio para importar o módulo ou componente associado.
    // O componente OfertaComponent será carregado apenas quando a rota for acessada.
    loadChildren: () => import('./components/ui/buttons/oferta/onde-fica/onde-fica.component').then(m => m.OndeFicaComponent)
  },
  {
    // Define uma rota para o caminho 'Como-Usar', onde ':id' é um parâmetro dinâmico.
    // Isso permite acessar diferentes ofertas com base no ID fornecido na URL.
    path: 'oferta/:id/como-usar',
    // Usa carregamento tardio para importar o módulo ou componente associado.
    // O componente OfertaComponent será carregado apenas quando a rota for acessada.
    loadChildren: () => import('./components/ui/buttons/oferta/como-usar/como-usar.component').then(m => m.ComoUsarComponent)
  }
];


