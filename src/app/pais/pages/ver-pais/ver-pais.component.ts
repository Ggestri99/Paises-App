import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent {

  pais!: Country

  constructor( private activatedRoute :ActivatedRoute,
    private _paisService: PaisService) {

  }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this._paisService.getPaisPorCodigo( id ) )
      )
    .subscribe(pais=>{
      this.pais = pais
    })


  }
}
