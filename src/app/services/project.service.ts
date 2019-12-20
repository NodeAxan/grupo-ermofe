import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {

  public url: string;

  constructor(
    public http: HttpClient
  ) {
    this.url = 'https://www.grupoermofe.com/api';
  }

  getProjects(): Observable<any> {
    return this.http.get(`${this.url}/project/read.php`);
  }

  getProjectsByWord(word: object): Observable<any> {
    const params = JSON.stringify(word);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}/project/read.php`, params, { headers });
  }

}
