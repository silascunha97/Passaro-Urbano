import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServerRoute } from '@angular/ssr';
import { AppComponent } from './app.component';
import { serverRoutes } from './app.routes.server';

const filteredServerRoutes: ServerRoute[] = serverRoutes.filter(route => 'renderMode' in route);

@NgModule({
  imports: [ ServerModule],
  providers: [/*provideServerRoutesConfig(filteredServerRoutes) */],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
