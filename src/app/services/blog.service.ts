import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../global/variable.global';

@Injectable()
export class BlogService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = api.urlBlog;
  }

  getArticles(search: string): Observable<any> {
    return this.http.get(`${this.url}/jsonapi/node/article?${search}`);
  }

  getArticle(url: string): Observable<any> {
    return this.http.get(url);
  }

}
