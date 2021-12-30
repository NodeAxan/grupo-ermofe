import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../../services/project.service";
import { FunctionsService } from "../../services/functions.service";
import { ProjectEntry } from "../../../interfaces/project";
import { api } from "../../global/variable.global";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  providers: [ProjectService, FunctionsService],
})
export class ProjectsComponent implements OnInit {
  public projects: ProjectEntry[];
  private options: any;
  public categories: string[];
  public projectsFiltered: ProjectEntry[];
  public loading = true;
  public url = api.cockpit;

  constructor(
    private projectService: ProjectService,
    private functionsService: FunctionsService
  ) {}

  ngOnInit() {
    this.getCategories();
    this.getProjects();
  }

  cardActived(e: MouseEvent) {
    this.functionsService.cardActived(e);
  }

  getProjects() {
    this.projects = [];
    this.projectsFiltered = [];
    this.projectService.getProjects().subscribe(
      (result) => {
        this.projects = result.entries;
        this.projectsFiltered = result.entries;
        this.loading = false;
        setTimeout(() => {
          this.functionsService.videoControls();
          this.functionsService.carousel();
        }, 2000);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCategories() {
    this.projectService.getProjects().subscribe(
      (result) => {
        this.categories = result.fields.categoria.options.options.split(",");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filterProjects(category: string) {
    if (this.projects) {
      return (this.projectsFiltered = this.projects.filter((project) => {
        return (
          project.categoria.replace(/ /g, " ").trim() ===
          category.replace(/ /g, " ").trim()
        );
      }));
    }
    this.projects = [];
  }

  activedOption(e: any) {
    this.options = document.querySelectorAll(".select__link");
    this.options.forEach((option) => {
      if (option.classList.contains("select__link--actived")) {
        option.classList.remove("select__link--actived");
      }
    });
    e.target.classList.add("select__link--actived");
  }
}
