import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

  public loading = true;
  public articles: any;
  public url: string;

  @Input() queryParams = '';
  @Input() urlHome = '';

  @Output() urlToHome = new EventEmitter<string>();

  constructor(
    private blogService: BlogService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe(params => {
      if (params.urlHome) this.url = params.urlHome;
    });
    this.getArticles();
  }

  selectUrl(url: string) {
    this.url = url;
  }

  setUrlToHome(url: string) {
    this.urlToHome.emit(url);
  }

  getArticles() {
    this.loading = true;
    this.blogService.getArticles(this.queryParams).subscribe(
      result => {
        this.articles = result.data;
        this.loading = false;
      },
      error => {
        console.error(error);
        this.loading = false;
      }
    );
  }
}
