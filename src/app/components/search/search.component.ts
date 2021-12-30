import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "../../services/project.service";
import { ProductService } from "../../services/product.service";
import { FunctionsService } from "../../services/functions.service";
import { ProductEntry } from "../../../interfaces/product";
import { ProjectEntry } from "../../../interfaces/project";
import { api } from "../../global/variable.global";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  providers: [ProjectService, ProductService, FunctionsService],
})
export class SearchComponent implements OnInit {
  public word: string;
  public products: ProductEntry[];
  public projects: ProjectEntry[];
  public url = api.cockpit;

  constructor(
    private activedRouter: ActivatedRoute,
    private projectService: ProjectService,
    private productService: ProductService,
    private functionsService: FunctionsService
  ) {}

  ngOnInit() {
    this.activedRouter.paramMap.subscribe((params: any) => {
      this.word = params.get("word") as string;
      this.getAllProjectsByWord(this.word);
      this.getAllProductsByWord(this.word);
    });
  }

  cardActived(e) {
    this.functionsService.cardActived(e);
  }

  getAllProjectsByWord(word: string) {
    this.projectService.getProjects().subscribe(
      (projectsObject) => {
        if (!projectsObject.entries.length) return (this.projects = []);
        this.projects = projectsObject.entries.filter(
          (project) =>
            project.nombre.toLowerCase().indexOf(word.toLowerCase()) > -1
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAllProductsByWord(word: string) {
    this.productService.getProducts().subscribe(
      (productsObject) => {
        if (!productsObject.entries.length) return (this.products = []);
        this.products = productsObject.entries.filter(
          (product) =>
            product.Nombre.toLowerCase().indexOf(word.toLowerCase()) > -1
        );
        setTimeout(() => {
          // this.functionsService.videoControls();
          this.functionsService.carousel();
        }, 2000);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
