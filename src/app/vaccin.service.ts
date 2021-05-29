import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaccin } from './vaccin';

@Injectable({
  providedIn: 'root',
})
export class VaccinService {
  private baseURL = 'http://localhost:8080/api/v1/vaccins';

  constructor(private httpClient: HttpClient) {}

  getVaccinList(): Observable<Vaccin[]> {
    return this.httpClient.get<Vaccin[]>(`${this.baseURL}`);
  }
  createVaccin(Vaccin: Vaccin): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, Vaccin);
  }
  getVaccinById(id: number): Observable<Vaccin> {
    return this.httpClient.get<Vaccin>(`${this.baseURL}/${id}`);
  }
  updateVaccin(id: number, Vaccin: Vaccin): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, Vaccin);
  }

  deleteVaccin(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
