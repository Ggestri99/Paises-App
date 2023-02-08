import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interface/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2'

  constructor( private http: HttpClient) { }

  buscarPais(name:string):Observable<Country[]> {
    const url =  `${this.apiUrl}/name/${name} `
    return this.http.get<Country[]>(url);
  }

  buscarCapital(capital:string):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorCodigo(id:string):Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region:string):Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${region}?fields=name,capital,alpaha2code,flag,population`
    return this.http.get<Country[]>(url)
  }

}
