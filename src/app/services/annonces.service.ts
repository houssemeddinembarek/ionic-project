import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Annonce } from '../models/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  newannonce$ = new BehaviorSubject<Annonce>(null);
  editannonce$ = new BehaviorSubject<Annonce>(null);
  deleteannonce$ = new BehaviorSubject<Annonce>(null);


  base_path = 'http://localhost:3000/Annonce';


  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  createAnnonce(item): Observable<Annonce> {

    return this.http.post<Annonce>(this.base_path, JSON.stringify(item), this.httpOptions)
  }

  getAnnonce(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(this.base_path + '/' + id, this.httpOptions)
  }

  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.base_path, this.httpOptions)
  }

  updateAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(this.base_path + '/' + annonce.id, annonce, this.httpOptions)
  }

  deleteAnnonce(id: number): Observable<any> {
    return this.http.delete<Annonce>(this.base_path + '/' + id, this.httpOptions)
  }

}
