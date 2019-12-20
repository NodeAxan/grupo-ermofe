import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public page: string;
  public wordSearch = '';

  @Output() public changePage = new EventEmitter();

  @ViewChild('burger', { static: false }) burger: ElementRef;
  @ViewChild('links', { static: false }) enlaces: ElementRef;
  @ViewChild('search', { static: false }) search: ElementRef;
  @ViewChild('closeForm', { static: false }) closeForm: ElementRef;

  constructor() {
    window.onscroll = () => {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (scroll > 1) {
        this.burger.nativeElement.parentElement.parentElement.classList.add('navbar__bar--actived');
      } else {
        this.burger.nativeElement.parentElement.parentElement.classList.remove('navbar__bar--actived');
      }
    };
  }

  ngOnInit() {
  }

  burgerActived() {
    this.burger.nativeElement.classList.toggle('burger--actived');
    this.enlaces.nativeElement.classList.toggle('links--actived');
  }

  searchActived() {
    this.search.nativeElement.classList.add('search--actived');
  }

  currentPage(page: string) {
    this.changePage.emit(page);
  }

}
