import { Routes } from "@angular/router"
import { HomeComponent } from "./components/ui/home/home.component"
import { RestaurantesComponent } from "./components/ui/pages/restaurantes/restaurantes.component"
import { DiversaoComponent } from "./components/ui/pages/diversao/diversao.component"

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'diversao', component: DiversaoComponent}
]

