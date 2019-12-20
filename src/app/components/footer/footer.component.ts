import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public page: string;

  @Output() public changePage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  currentPage(page: string) {
    this.changePage.emit(page);
  }

}
