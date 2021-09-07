import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../models/url.model';

const baseUrl = 'http://localhost:8080/api/url';


@Injectable({
  providedIn: 'root'
})
export class UrlService {
  

  constructor(private http: HttpClient) { }

  saveNewUrl(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  getUrl(hash: string) : Observable<any> {
    return this.http.get(baseUrl + '/' + hash);
  }
}
