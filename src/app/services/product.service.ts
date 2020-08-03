import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../global/variable.global';

@Injectable()
export class ProductService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = api.url;
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.url}/product/read.php`);
  }

  getProductsByWord(word: object): Observable<any> {
    const params = JSON.stringify(word);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}/product/read.php`, params, { headers });
  }

}
