import { Injectable } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private personaUrl:string = '/persona/all';
  constructor(private http: HttpClient) { }

  getPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.personaUrl);
  }
}
