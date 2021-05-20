import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private _http: HttpClient) {}

  newsApiUrl =
    ' https://newsapi.org/v2/everything?q=Apple&from=2021-05-20&sortBy=popularity&apiKey=d93fc0e03ac54c8ab8053a7d32f73a68';
  Home(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
}
