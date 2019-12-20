import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  public title = 'Grupo ERMOFE';
  public page: string;

  public burger: ElementRef;
  public links: ElementRef;
  public search: ElementRef;
  public heroElement: HTMLElement;

  @ViewChild('general', { static: false }) general: ElementRef;
  @ViewChild(NavigationComponent, { static: false }) nav;

  constructor() {
    setTimeout(() => {
      this.className(window.location.href.split('/')[3]);
    }, 250);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.burger = this.nav.burger;
    this.links = this.nav.enlaces;
    this.search = this.nav.search;
    this.heroElement = document.querySelector('.hero');
  }

  removeStylesForNav() {
    if (this.burger.nativeElement.classList.contains('burger--actived')) {
      this.burger.nativeElement.classList.remove('burger--actived');
    }
    if (this.links.nativeElement.classList.contains('links--actived')) {
      this.links.nativeElement.classList.remove('links--actived');
    }
    if (this.search.nativeElement.classList.contains('search--actived')) {
      this.search.nativeElement.classList.remove('search--actived');
    }
  }

  className(page) {
    if (page === 'home' || page === '') {
      this.page = 'home';
      this.title = 'Grupo ERMOFE';
      this.general.nativeElement.children[0].className = 'header home';
    } else if (page === 'projects') {
      this.page = 'projects';
      this.title = 'Proyectos';
      this.general.nativeElement.children[0].className = 'header projects';
    } else if (page === 'aluminium') {
      this.page = 'aluminium';
      this.title = '¿Por qué aluminio?';
      this.general.nativeElement.children[0].className = 'header aluminium';
    } else if (page === 'products') {
      this.page = 'products';
      this.title = 'Productos';
      this.general.nativeElement.children[0].className = 'header products';
    } else if (page === 'clients') {
      this.page = 'clients';
      this.title = 'Clientes';
      this.general.nativeElement.children[0].className = 'header clients';
    } else if (page === 'catalog') {
      this.page = 'catalog';
      this.title = 'Catálogo';
      this.general.nativeElement.children[0].className = 'header catalog';
    } else if (page === 'contact') {
      this.page = 'contact';
      this.title = 'Contáctanos';
      this.general.nativeElement.children[0].className = 'header contact';
    } else if (page === 'search') {
      this.page = 'search';
      this.title = 'Búsqueda';
      this.general.nativeElement.children[0].className = 'header search';
    }
  }

}
