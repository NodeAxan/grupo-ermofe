import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService, FunctionsService]
})
export class ProductsComponent implements OnInit, AfterViewInit {

  public products: any;
  public productsExists = false;

  constructor(
    private productService: ProductService,
    private functionsService: FunctionsService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  ngAfterViewInit() {
  }

  cardActived(e) {
    e.target.classList.toggle('mdi-plus');
    e.target.classList.toggle('mdi-minus');
    e.target.parentElement.parentElement.parentElement.classList.toggle('product__card--actived');
  }

  getProducts() {
    this.products = false;
    this.productService.getProducts().subscribe(
      result => {
        this.products = result;
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
