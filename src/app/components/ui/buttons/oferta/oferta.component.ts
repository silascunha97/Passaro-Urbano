import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../../service/ofertas.service';
import { OfertasInterface } from '../../../interfaces/ofertas.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  standalone: false,
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.scss',
  providers: [ OfertasService ],
})
export class OfertaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private ofertasServices: OfertasService
  ) { }

 
  public ofertas: OfertasInterface[] = [];

  ngOnInit():void {
    this.ofertasServices.getOfertasById(this.route.snapshot.params['id'])
      .subscribe((oferta: OfertasInterface[]) => {
        this.ofertas = oferta;
      })
  }

  // Add any additional methods or properties as needed

}
