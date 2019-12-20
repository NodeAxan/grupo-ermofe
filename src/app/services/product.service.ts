import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  public url: string;

  constructor(
    public http: HttpClient
  ) {
    this.url = 'https://www.grupoermofe.com/api';
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
