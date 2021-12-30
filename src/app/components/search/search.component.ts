import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProductService } from '../../services/product.service';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ProjectService, ProductService, FunctionsService]
})
export class SearchComponent implements OnInit {

  public word: object;
  public products: any;
  public projects: any;

  constructor(
    private activedRouter: ActivatedRoute,
    private projectService: ProjectService,
    private productService: ProductService,
    private functionsService: FunctionsService
  ) { }

  ngOnInit() {
    this.activedRouter.paramMap.subscribe((params: any) => {
      this.word = {
        word: params.get('word')
      };
      // this.getAllProjectsByWord(this.word);
      this.getAllProductsByWord(this.word);
    });
  }

  cardActived(e) {
    this.functionsService.cardActived(e);
  }

  // getAllProjectsByWord(word: object) {
  //   this.projectService.getProjectsByWord(word).subscribe(
  //     result => {
  //       if (typeof result === 'string') {
  //         this.projects = false;
  //       } else {
  //         this.projects = result;
  //         setTimeout(() => {
  //           this.functionsService.videoControls();
  //           this.functionsService.carousel();
  //         }, 2000);
  //       }
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  getAllProductsByWord(word: object) {
    this.productService.getProductsByWord(word).subscribe(
      result => {
        if (typeof result === 'string') {
          this.products = false;
        } else {
          this.products = result;
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

}
