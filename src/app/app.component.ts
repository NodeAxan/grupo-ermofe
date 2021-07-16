import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FacebookService]
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

  constructor(
    private facebookService: FacebookService
  ) {
    setTimeout(() => {
      this.className(window.location.href.split('/')[4]);
    }, 250);
  }

  ngOnInit() {
    this.initFacebook();
  }

  ngAfterViewInit() {
    this.burger = this.nav.burger;
    this.links = this.nav.enlaces;
    this.search = this.nav.search;
    this.heroElement = document.querySelector('.hero');
  }

  private initFacebook(): void {
    const initParams: InitParams = { xfbml: true, version: 'v5.0' };
    this.facebookService.init(initParams);
  }

  removeStylesForNav() {
    this.burger.nativeElement.classList.remove('burger--actived');
    this.links.nativeElement.classList.remove('links--actived');
    this.search.nativeElement.classList.remove('search--actived');
  }

  className(page: string) {
    if (page.includes('home') || page === '') {
      this.page = 'home';
      this.title = 'Grupo ERMOFE';
      this.general.nativeElement.children[0].className = 'header home';
    } else if (page.includes('projects')) {
      this.page = 'projects';
      this.title = 'Proyectos';
      this.general.nativeElement.children[0].className = 'header projects';
    } else if (page.includes('aluminium')) {
      this.page = 'aluminium';
      this.title = '¿Por qué aluminio?';
      this.general.nativeElement.children[0].className = 'header aluminium';
    } else if (page.includes('products')) {
      this.page = 'products';
      this.title = 'Productos';
      this.general.nativeElement.children[0].className = 'header products';
    } else if (page.includes('clients')) {
      this.page = 'clients';
      this.title = 'Clientes';
      this.general.nativeElement.children[0].className = 'header clients';
    } else if (page.includes('contact')) {
      this.page = 'contact';
      this.title = 'Contáctanos';
      this.general.nativeElement.children[0].className = 'header contact';
    } else if (page.includes('search')) {
      this.page = 'search';
      this.title = 'Búsqueda';
      this.general.nativeElement.children[0].className = 'header search';
    } else if (page.includes('about')) {
      this.page = 'about';
      this.title = 'Nosotros';
      this.general.nativeElement.children[0].className = 'header about';
    } else if (page.includes('blog')) {
      this.page = 'blog';
      this.title = 'Blog';
      this.general.nativeElement.children[0].className = 'header blog';
    } else if (page.includes('article')) {
      this.page = 'article';
      this.title = 'Grupo ERMOFE';
      this.general.nativeElement.children[0].className = 'header article';
    }
  }

}
