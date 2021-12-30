import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { api } from "../global/variable.global";
import { ClientObject } from "../../interfaces/client";
import environment from "../../environments/environment";

@Injectable()
export class ClientService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = api.cockpit;
  }

  getClients(): Observable<ClientObject> {
    return this.http.get<ClientObject>(
      `${this.url}/api/collections/get/clients`,
      {
        headers: {
          "Cockpit-Token": environment.API_KEY,
        },
      }
    );
  }
}
