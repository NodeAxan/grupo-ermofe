import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ArticleEntry } from '../../../interfaces/blog-article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [BlogService]
})
export class ArticleComponent {

  @Input() public article: ArticleEntry;

  returnBlogHome(){
    window.location.href = "/blog";
  }
}
