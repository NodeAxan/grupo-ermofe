import { Component, OnInit } from "@angular/core";

@Component({
  selector: "about-carousel",
  templateUrl: "./about-carousel.component.html",
  styleUrls: ["./about-carousel.component.scss"],
})
export class AboutCarouselComponent implements OnInit {
  slides = [
    {
      image: "../../assets/img/about-carousel/1.jpg",
      text: `Somos una empresa mexicana con más de <strong>30 años de experiencia</strong> en la industria de la 
      construcción. <br/><br/>Actualmente nos especializamos en <strong>suministrar e instalar</strong> estructuras de 
      materiales sustentables como <strong>ALUMINIO, PVC y FRP</strong>.`,
    },
    {
      image: "../../assets/img/about-carousel/2.jpg",
      text: `En el <strong>2003</strong> por la alta demanda de obras en el estado de Tabasco se constituye formalmente 
      <strong>GRUPO ERMOFE</strong>, realizando proyectos como puentes, escuelas y obras privadas.`,
    },
    {
      image: "../../assets/img/about-carousel/3.jpg",
      text: `Nuestro principal objetivo es proveer <strong>estructuras innovadoras</strong> que contribuyan al desarrollo 
      global del país, mejorando la calidad de vida de nuestros colaboradores, clientes y usuarios.`,
    },
    {
      image: "../../assets/img/about-carousel/4.jpg",
      text: `En el 2015 Instalamos en Villahermosa Tabasco el <strong>primer puente peatonal de aluminio 
      marino en México</strong>.`,
    },
    {
      image: "../../assets/img/about-carousel/5.jpg",
      text: `Somos una <strong>empresa ecológicamente responsable</strong>, ya que el <strong>80%</strong> del material para la 
      fabricación de nuestros productos es reciclado y el producto terminado es <strong>100% reciclable</strong>.`,
    },
    {
      image: "../../assets/img/about-carousel/6.jpg",
      text: `En el <strong>2018</strong> instalamos en el Distribuidor Vial “Gobernadores” en Campeche, Campeche <strong>el primer 
      parapeto de aluminio marino en México</strong>.`,
    },
    {
      image: "../../assets/img/about-carousel/7.jpg",
      text: `Nos distinguimos por ofrecer estructuras de excelente calidad, con un insuperable <strong>costo -
      beneficio</strong>, cortos tiempos de entrega, servicios integrales, desde la <strong>concepción del 
      proyecto, el diseño, el suministro y la instalación de nuestros productos</strong>.`,
    },
    {
      image: "../../assets/img/about-carousel/8.jpg",
      text: `Hemos instalado más de <strong>30 puentes peatonales de aluminio</strong> en más de 15 ciudades en el 
      país. Y más de <strong>11,000 metros lineales de parapetos de aluminio</strong>.`,
    },
  ];

  currentIndex = 0;
  isLastSlide = false;
  isFirstSlide = false;

  ngOnInit() {
    this.updateSlidePosition();
    // Automatically change slide every 5 seconds
  }

  updateSlidePosition() {
    const slideWidth = (
      document.querySelector(".carousel-slide") as HTMLElement
    ).clientWidth;
    const wrapper = document.querySelector(".carousel-wrapper") as HTMLElement;
    if (this.isLastSlide) {
      wrapper.style.transform = `translateX(0)`;
      this.currentIndex = 0;
      this.isLastSlide = false;
    } else if (this.isFirstSlide) {
      wrapper.style.transform = `translateX(-${
        (this.slides.length - 1) * slideWidth
      }px)`;
      this.currentIndex = this.slides.length - 1;
      this.isFirstSlide = false;
    } else {
      wrapper.style.transform = `translateX(-${
        this.currentIndex * slideWidth
      }px)`;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.isFirstSlide = this.currentIndex === 0;
      this.currentIndex--;
      this.updateSlidePosition();
    } else if (this.currentIndex === 0) {
      this.currentIndex = this.slides.length - 1;
      this.isFirstSlide = false;
      this.updateSlidePosition();
    }
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.isLastSlide = this.currentIndex === this.slides.length - 1;
      this.currentIndex++;
      this.updateSlidePosition();
      if (this.currentIndex === 1) {
        this.isFirstSlide = false; // resetea la variable isFirstSlide
      }
    } else if (this.currentIndex === this.slides.length - 1) {
      this.currentIndex = 0;
      this.isLastSlide = false;
      this.updateSlidePosition();
    }
  }
}
