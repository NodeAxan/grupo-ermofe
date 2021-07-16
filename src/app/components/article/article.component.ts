import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  private url: string;

  constructor(
    private activedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activedRouter.paramMap.subscribe((params: any) => {
      this.url = params.get('url');
      this.getArticle();
    });
  }

  getArticle() {
    console.log(this.url);
  }

}
