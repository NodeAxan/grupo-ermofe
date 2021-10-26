import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [ProductService]
})
export class FooterComponent implements OnInit {

  public page: string;
  public products: any;
  public year: number = new Date().getFullYear();

  @Output() public changePage = new EventEmitter();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  currentPage(page: string) {
    this.changePage.emit(page);
  }

  getProducts() {
    this.products = false;
    this.productService.getProducts().subscribe(
      result => {
        // Return 10 first products only
        this.products = result.entries.slice(0, 10);
      },
      error => {
        console.log(`Ha ocurrido un error interno: ${error}`);
      }
    );
  }

}
