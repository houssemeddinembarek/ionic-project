import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from '../models/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {



  base_path = 'http://localhost:3000/annonces';


  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  createAnnonce(item): Observable<Annonce> {

    return this.http.post<Annonce>(this.base_path, JSON.stringify(item), this.httpOptions)
  }

  getAnnonce(id): Observable<Annonce> {
    return this.http.get<Annonce>(this.base_path + '/' + id, this.httpOptions)
  }

  getAnnonces(): Observable<Annonce> {
    return this.http.get<Annonce>(this.base_path)
  }

  updateAnnonce(id, item): Observable<Annonce> {
    return this.http.put<Annonce>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
  }

  deleteAnnonce(id) {
    return this.http.get<Annonce>(this.base_path + '/' + id, this.httpOptions)
  }

}
