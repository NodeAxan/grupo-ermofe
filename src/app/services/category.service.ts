import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'https://www.grupoermofe.com/api';
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.url}/category/read.php`);
  }

}
