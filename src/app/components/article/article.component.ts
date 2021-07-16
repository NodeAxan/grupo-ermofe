import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [BlogService]
})
export class ArticleComponent implements OnInit {

  public loading: boolean = true;
  private article: any;

  @Input() public url = '';
  @Output() public noUrl = new EventEmitter<string>();

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.getArticle();
  }

  setNoUrl(url: string) {
    this.noUrl.emit(url);
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
