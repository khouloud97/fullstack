import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private baseURL = 'http://localhost:8080/api/v1/persons';

  constructor(private httpClient: HttpClient) {}

  getPersonList(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.baseURL}`);
  }
  createperson(person: Person): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, person);
  }
  getPersonById(id: number): Observable<Person> {
    return this.httpClient.get<Person>(`${this.baseURL}/${id}`);
  }
  updatePerson(id: number, person: Person): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, person);
  }

  deletePerson(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getpersonbyVaccin(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  findbyvaccin(id: number): Observable<Person> {
    return this.httpClient.get<Person>(`${this.baseURL}/${id}`);
  }
}
