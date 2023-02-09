import { Component } from '@angular/core';
import { Country } from '../../interface/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termino: string = '';
  hayError:boolean = false;
  capital: Country[] = []
  capitalSugerida: Country[] = []

  constructor(
    private _paisService: PaisService
  ) {}

    ngOnInit(): void {
      console.log(this.capital)

    }

  buscar(termino:string){
    this.hayError = false
    this.termino = termino
    this._paisService.buscarCapital(this.termino)
    .subscribe(capital=>{
      console.log(capital)
      this.capital = capital;

    }, (err)=> {
      this.hayError = true
    })
    console.log(this.termino)
    this.capital = []
  }

  sugerencias(termino:any) {
    this.hayError = false
    this._paisService.buscarCapital( termino )
      .subscribe( capital => this.capitalSugerida = capital.splice(0,5),
      (err)=>this.capitalSugerida)

  }
}
