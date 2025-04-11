import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../../../service/ofertas.service';
import { ActivatedRoute } from '@angular/router';
import { OfertasInterface } from '../../../../interfaces/ofertas.interface';

@Component({
  selector: 'app-onde-fica',
  standalone: false,
  templateUrl: './onde-fica.component.html',
  styleUrl: './onde-fica.component.scss',
  providers: [ OfertasService ],
})
export class OndeFicaComponent implements OnInit {
  respostas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit(): void {
    this.route.parent!.snapshot.params['id'];
    this.ofertaService.getOndeFicaOfertasById(this.route.parent!.snapshot.params['id'])
      .subscribe((respostas: OfertasInterface[]) => {
        this.respostas = respostas;
        return this.respostas;
      });
  }

}
