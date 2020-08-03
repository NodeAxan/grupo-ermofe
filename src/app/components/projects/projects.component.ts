import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CategoryService } from '../../services/category.service';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService, CategoryService, FunctionsService]
})
export class ProjectsComponent implements OnInit {

  public projects: any;
  private options: any;
  public categories: any;
  public projectsFiltered: any;
  public loading = true;

  constructor(
    private projectService: ProjectService,
    private categoryService: CategoryService,
    private functionsService: FunctionsService
  ) { }

  ngOnInit() {
    this.getCategories();
    this.getProjects();
  }

  cardActived(e) {
    this.functionsService.cardActived(e);
  }

  getProjects() {
    this.projects = false;
    this.projectsFiltered = false;
    this.projectService.getProjects().subscribe(
      result => {
        this.projects = result;
        this.projectsFiltered = result;
        this.loading = false;
        setTimeout(() => {
          this.functionsService.videoControls();
          this.functionsService.carousel();
        }, 2000);
      },
      error => {
        console.log(error);
      }
    );
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      result => {
        this.categories = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  filterProjects(category: string) {
    if (this.projects) {
      this.projects = this.projectsFiltered.filter(project => project.category === category);
      if (this.projects.length == 0) { this.projects = false; }
    }
  }

  activedOption(e: any) {
    this.options = document.querySelectorAll('.select__link');
    this.options.forEach(option => {
      if (option.classList.contains('select__link--actived')) { option.classList.remove('select__link--actived'); }
    });
    e.target.classList.add('select__link--actived');
  }

}
