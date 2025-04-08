import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../../service/ofertas.service';
import { OfertasInterface } from '../../../interfaces/ofertas.interface';

@Component({
  selector: 'app-diversao',
  standalone: false,
  templateUrl: './diversao.component.html',
  styleUrl: './diversao.component.scss',
  providers: [OfertasService],
})
export class DiversaoComponent implements OnInit {
  
  public ofertas!: OfertasInterface[];

  constructor(private ofertasService: OfertasService){}


  ngOnInit() {
    this.ofertasService.getOfertasCategorias('diversao')
      .subscribe((ofertas: OfertasInterface[]) => {
        this.ofertas = ofertas;
        //console.log(this.ofertas);
      });
  }
}
