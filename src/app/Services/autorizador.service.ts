import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { Autorizador } from '../Interfaces/autorizador';

@Injectable({
  providedIn: 'root'
})
export class AutorizadorService {

  private endpoint: string = environment.endPoint;
  private apiUrl: string = this.endpoint + "Autorizador"

  constructor(private client: HttpClient) { }

  get(codigo: number, contrasena: string): Observable<Autorizador> {
    return this.client.get<Autorizador>(`${this.apiUrl}/${codigo}/${contrasena}`)
  }
}
