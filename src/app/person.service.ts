import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private baseURL = 'http://localhost:8080/api/v1/persons';
  private URLVaccin = 'http://localhost:8080/api/v1/persons/cp_fk=1';
  private URLsinovac = 'http://localhost:8080/api/v1/persons/cp_fk=2';
  private URLast = 'http://localhost:8080/api/v1/persons/cp_fk=3';

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

  findbyvaccin(id: number): Observable<Person> {
    return this.httpClient.get<Person>(`${this.URLVaccin}/${id}`);
  }

  getpersonparvaccin(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.URLVaccin}`);
  }
  findbyvaccin1(id: number): Observable<Person> {
    return this.httpClient.get<Person>(`${this.URLsinovac}/${id}`);
  }

  getpersonparvaccin1(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.URLsinovac}`);
  }
  findbyvaccin3(id: number): Observable<Person> {
    return this.httpClient.get<Person>(`${this.URLast}/${id}`);
  }

  getpersonparvaccin3(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.URLast}`);
  }
}
