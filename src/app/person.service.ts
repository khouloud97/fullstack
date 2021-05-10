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
}
