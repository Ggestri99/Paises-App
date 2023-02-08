import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {

  termino: string = '';
  hayError:boolean = false;
  paises: Country[] = []
  paisesSugeridos: Country[] = []
  mostrarSugerencia = true

  constructor(
    private _paisService: PaisService
  ) {}

    ngOnInit(): void {
      console.log(this.paises)

    }

  buscar(termino:string){
    this.hayError = false
    this.termino = termino
    this._paisService.buscarPais(this.termino)
    .subscribe(paises=>{
      console.log(paises)
      this.paises = paises;

    }, (err)=> {
      this.hayError = true
    })
    console.log(this.termino)
    this.paises = []
  }

  sugerencias(termino:any) {
    this.hayError = false
    this._paisService.buscarPais( termino )
      .subscribe( paises => this.paises = paises.splice(0,15),
      (err)=>this.paisesSugeridos)
  }

}
