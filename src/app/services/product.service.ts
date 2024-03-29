import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../global/variable.global';
import environment from '../../environments/environment';
import { ProductsObject } from '../../interfaces/product';

@Injectable()
export class ProductService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = api.cockpit;
  }

  getProducts(): Observable<ProductsObject> {
    return this.http.get<ProductsObject>(`${this.url}/api/collections/get/productos`, {
      headers: {
        "Cockpit-Token": environment.API_KEY
      }
    });
  }

}
