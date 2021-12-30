import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { api } from "../global/variable.global";
import environment from "../../environments/environment";
import { ProjectsObject } from "../../interfaces/project";

@Injectable()
export class ProjectService {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = api.cockpit;
  }

  getProjects(): Observable<ProjectsObject> {
    return this.http.get<ProjectsObject>(
      `${this.url}/api/collections/get/proyectos`,
      {
        headers: {
          "Cockpit-Token": environment.API_KEY,
        },
      }
    );
  }

}
