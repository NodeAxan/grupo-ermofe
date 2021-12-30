import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { api } from "../global/variable.global";
import ContactForm from "../../interfaces/contact-form";
import environment from "../../environments/environment";

@Injectable()
export class UtilsService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = api.cockpit;
  }

  sendContactForm(form: ContactForm): Observable<any> {
    const params = JSON.stringify({
      form,
    });
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Cockpit-Token", environment.API_KEY);
    return this.http.post(`${this.url}/api/forms/submit/contactform`, params, {
      headers,
    });
  }
}
