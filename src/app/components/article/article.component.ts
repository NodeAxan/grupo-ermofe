import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [BlogService]
})
export class ArticleComponent implements OnInit {

  public loading: boolean = true;
  private url: string;
  private article: any;

  constructor(
    private activedRouter: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.activedRouter.paramMap.subscribe((params: any) => {
      this.url = params.get('url');
      this.getArticle();
    });
  }

  getArticle() {
    this.blogService.getArticle(this.url).subscribe(
      result => {
        this.article = result.data;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}
