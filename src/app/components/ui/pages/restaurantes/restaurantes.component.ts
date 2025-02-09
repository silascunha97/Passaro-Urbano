import { Component, OnInit } from '@angular/core';
import { OfertasInterface } from '../../../interfaces/ofertas.interface';
import { OfertasService } from '../../../service/ofertas.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-restaurantes',
  standalone: false,
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.scss',
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {
  ofertas: OfertasInterface[] = [];

  constructor(private ofertasService: OfertasService){}

  ngOnInit(): void {
    this.ofertasService.getOfertasCategorias('restaurante')
    .pipe(
      map((ofertas: OfertasInterface[]) => {
        this.ofertas = ofertas;
        return ofertas;
      })
    )
    .subscribe();
  }
}
