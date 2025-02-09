import { RenderMode, ServerRoute } from '@angular/ssr';
import { Route } from '@angular/router';

export const serverRoutes: (ServerRoute | Route)[] = [
  {
    path: '**',
    //path: 'restaurante', component: RestaurantesComponent,
    renderMode: RenderMode.Prerender
  },
  {
    path: 'diversao', 
    loadChildren: () => import('./components/ui/pages/diversao/diversao.component').then(m => m.DiversaoComponent)
  },
  {
    path: 'restaurante', 
    loadChildren: () => import('./components/ui/pages/restaurantes/restaurantes.component').then(m => m.RestaurantesComponent)
  }
];


