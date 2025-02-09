import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../service/ofertas.service';
import { OfertasInterface } from '../../interfaces/ofertas.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [OfertasService],
})
export class HomeComponent implements OnInit {

  constructor(private readonly ofertasServices: OfertasService){}

  public ofertas: OfertasInterface[] = []

  ngOnInit(): void {
  this.ofertasServices.getOfertas()
    .subscribe((ofertas: OfertasInterface[]) => {
      this.ofertas = ofertas
    })
  }
}
