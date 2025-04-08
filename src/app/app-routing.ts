// Importa o tipo Routes do módulo @angular/router, que é usado para definir as rotas da aplicação.
import { Routes } from "@angular/router";

// Importa o componente HomeComponent, que será exibido na rota principal ('').
import { HomeComponent } from "./components/ui/home/home.component";

// Importa o componente RestaurantesComponent, que será exibido na rota '/restaurantes'.
import { RestaurantesComponent } from "./components/ui/pages/restaurantes/restaurantes.component";

// Importa o componente DiversaoComponent, que será exibido na rota '/diversao'.
import { DiversaoComponent } from "./components/ui/pages/diversao/diversao.component";

// Importa o componente OfertaComponent, que será exibido nas rotas '/oferta' e '/oferta/:id'.
import { OfertaComponent } from "./components/ui/buttons/oferta/oferta.component";

// Define as rotas da aplicação como um array de objetos do tipo Routes.
export const ROUTES: Routes = [
    { path: '', component: HomeComponent }, // Rota principal (vazia), que exibe o HomeComponent.
    { path: 'restaurantes', component: RestaurantesComponent }, // Rota '/restaurantes', que exibe o RestaurantesComponent.
    { path: 'diversao', component: DiversaoComponent }, // Rota '/diversao', que exibe o DiversaoComponent.
    { path: 'oferta', component: OfertaComponent }, // Rota '/oferta', que exibe o OfertaComponent.
    { path: 'oferta/:id', component: OfertaComponent }, // Rota '/oferta/:id', que exibe o OfertaComponent com um parâmetro dinâmico 'id'.
];

