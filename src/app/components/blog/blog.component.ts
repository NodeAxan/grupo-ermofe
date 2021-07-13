import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

  public loading = true;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.loading = true;
    this.blogService.getArticles().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.error(error);
      }
    );
  }

}
