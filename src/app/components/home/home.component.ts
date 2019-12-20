import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProjectService, FunctionsService]
})
export class HomeComponent implements OnInit {

  public projects: any;

  constructor(
    public projectService: ProjectService,
    public functionsService: FunctionsService
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  cardActived(e) {
    this.functionsService.cardActived(e);
  }

  getProjects() {
    this.projects = false;
    this.projectService.getProjects().subscribe(
      result => {
        this.projects = result;
        setTimeout(() => {
          this.functionsService.carousel();
        }, 2000);
      },
      error => {
        console.log(error);
      }
    );
  }

}
