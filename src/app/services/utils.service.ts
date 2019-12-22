import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UtilsService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'https://www.grupoermofe.com/api';
  }

  sendContactForm(email: object): Observable<any> {
    const params = JSON.stringify(email);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}/utils/sendContactForm.php`, params, { headers });
  }

  some() {
    console.log('hola');
  }

}
