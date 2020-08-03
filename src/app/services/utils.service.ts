import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../global/variable.global';

@Injectable()
export class UtilsService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = api.url;
  }

  sendContactForm(email: object): Observable<any> {
    const params = JSON.stringify(email);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}/utils/sendContactForm.php`, params, { headers });
  }

}
