import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../global/variable.global';
import environment from '../../environments/environment';
import { ArticlesObject } from '../../interfaces/blog-article';

@Injectable()
export class BlogService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = api.cockpit;
  }

  getArticles(): Observable<ArticlesObject> {
    return this.http.get<ArticlesObject>(`${this.url}/api/collections/get/articulos`, {
      headers: {
        "Cockpit-Token": environment.API_KEY
      }
    });
  }

  getArticle(url: string): Observable<any> {
    return this.http.get(url);
  }

}
