import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../global/variable.global';

@Injectable()
export class CategoryService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = api.url;
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.url}/category/read.php`);
  }

}
