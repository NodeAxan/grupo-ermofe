import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
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

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  selectUrl(url: string) {
    this.url = url;
  }

  getArticles() {
    this.loading = true;
    this.blogService.getArticles().subscribe(
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
