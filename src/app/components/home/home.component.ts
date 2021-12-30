import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { FunctionsService } from '../../services/functions.service';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';
import { ProjectEntry } from '../../../interfaces/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProjectService, FunctionsService, BlogService]
})
export class HomeComponent implements OnInit {

  public projects: ProjectEntry[];
  public query: string = 'page[limit]=3&sort=-created';
  public url: string;

  constructor(
    public projectService: ProjectService,
    public functionsService: FunctionsService,
    public blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  selectUrl(url: string) {
    this.router.navigate(['blog'], { queryParams: { urlHome: url } });
  }

  cardActived(e) {
    this.functionsService.cardActived(e);
  }

  getProjects() {
    this.projects = [];
    this.projectService.getProjects().subscribe(
      result => {
        this.projects = result.entries.filter((project, index) => index < 4);
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
