import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './components/ui/topo/topo.component';
import { HomeComponent } from './components/ui/home/home.component';
import { RodapeComponent } from './components/ui/rodape/rodape.component';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RestaurantesComponent } from './components/ui/pages/restaurantes/restaurantes.component';
import { DiversaoComponent } from './components/ui/pages/diversao/diversao.component'
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './app-routing'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    BrowserModule,
    AppRoutingModule,
    NgFor,
    CommonModule,
    HttpClientModule,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
