import { Location } from "@angular/common";
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleEntry } from "../../../interfaces/blog-article";
import { BlogService } from "../../services/blog.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
  providers: [BlogService],
})
export class BlogComponent implements OnInit {
  public loading = true;
  public articles: ArticleEntry[];
  public url: string;
  public selectedArticle: ArticleEntry;

  @Input() queryParams = "";
  @Input() urlHome = "";

  @Output() urlToHome = new EventEmitter<string>();

  constructor(
    private blogService: BlogService,
    private activedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.activedRoute.queryParams.subscribe((params) => {
      this.getArticles(params.article);
    });
  }

  selectArticle(article: ArticleEntry) {
    window.location.href = "/blog?article=" + article._id;
  }

  selectUrl(url: string) {
    this.url = url;
  }

  setUrlToHome(url: string) {
    this.urlToHome.emit(url);
  }

  getArticles(articleId?: string) {
    this.loading = true;
    return this.blogService.getArticles().subscribe(
      (result) => {
        this.articles = result.entries;
        this.loading = false;
        if (articleId) {
          this.selectedArticle = this.articles.find(
            (article) => article._id === articleId
          );
        }
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }
}
