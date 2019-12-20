import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService, FunctionsService]
})
export class ProjectsComponent implements OnInit {

  public projects: any;
  public projectsFiltered: any;

  constructor(
    private projectService: ProjectService,
    private functionsService: FunctionsService
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  cardActived(e) {
    this.functionsService.cardActived(e);
  }

  getProjects() {
    this.projectService.getProjects().subscribe(
      result => {
        if (result.length === 0) {
          this.projects = false;
          this.projectsFiltered = false;
        } else {
          this.projects = result;
          this.projectsFiltered = result;
          setTimeout(() => {
            this.functionsService.videoControls();
            this.functionsService.carousel();
          }, 2000);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  filterProjects(category: string) {
    this.projects = this.projectsFiltered.filter(project => project.category === category);
  }

}
