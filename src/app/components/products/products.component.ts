import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FunctionsService } from '../../services/functions.service';
import { ProductEntry } from '../../../interfaces/product';
import { api } from '../../global/variable.global';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService, FunctionsService]
})
export class ProductsComponent implements OnInit, AfterViewInit {
  public products: ProductEntry[];
  public loading = true;
  public cockpitUrl = api.cockpit;

  constructor(private productService: ProductService, private functionsService: FunctionsService) { }

  ngOnInit() {
    this.getProducts();
  }

  ngAfterViewInit() { }

  cardActived(e) {
    if (e.target.classList.contains('plus')) {
      e.target.style.display = e.target.style.display === 'none' ? 'block' : 'none';
      e.target.nextElementSibling.style.display = e.target.style.display === 'block' ? 'none' : 'block';
    }

    if (e.target.classList.contains('minus')) {
      e.target.style.display = e.target.style.display === 'none' ? 'block' : 'none';
      e.target.previousSibling.style.display = e.target.style.display === 'block' ? 'none' : 'block';
    }

    e.target.parentElement.parentElement.parentElement.classList.toggle('product__card--actived');
  }

  getProducts() {
    this.products = [];
    this.productService.getProducts().subscribe(
      (result) => {
        this.products = result.entries;
        this.loading = false;
        setTimeout(() => {
          this.functionsService.carousel();
        }, 2000);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
