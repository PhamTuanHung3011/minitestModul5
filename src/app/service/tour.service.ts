import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "../tour-componet/model/tour";

@Injectable({
  providedIn: 'root'
})
export class TourService {


  constructor(private  http:HttpClient) { }

  findAll(): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8080/tours');
  }

  create(tour: Tour): Observable<any> {
    return this.http.post('http://localhost:8080/tours', tour);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`http://localhost:8080/tours/${id}`);
  }

  findById(id: number): Observable<Tour>{
    return this.http.get<Tour>(`http://localhost:8080/tours/${id}`);
  }

  edit(tour: Tour): Observable<any>{
    return this.http.put('http://localhost:8080/tours', tour);
  }
  findAllByName(name:string): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8080/tours/search/'+name);
  }

}
