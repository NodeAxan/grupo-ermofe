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
    document.addEventListener("mousemove", function (event: MouseEvent) {
      let parallaxElements: NodeListOf<HTMLImageElement> =
        document.querySelectorAll(".carousel-slide img");
      let center = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // Punto central de la ventana

      parallaxElements.forEach(function (
        element: HTMLImageElement,
        index: number
      ) {
        let speed: number = (index + 1) * 0.005; // Velocidad relativa para cada imagen
        let x = (center.x - event.pageX) * speed;
        let y = (center.y - event.pageY) * speed;
        element.style.transform = `translate(${x}px, ${y}px)`; // Actualizamos la posición de la imagen
      });
    });
  }

  updateSlidePosition() {
    const carouselSlide = document.querySelector(
      ".carousel-slide"
    ) as HTMLElement;
    if (carouselSlide) {
      const slideWidth = (
        document.querySelector(".carousel-slide") as HTMLElement
      ).clientWidth;
      const wrapper = document.querySelector(
        ".carousel-wrapper"
      ) as HTMLElement;
      // const text = document.querySelector(".carousel-text") as HTMLElement;
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
      // text.classList.add("animate__animated animate__fadeIn");
      // this.animateCSS(".slide-text", "fadeIn");
    }
  }

  animateCSS = (
    element: string,
    animation: string,
    prefix = "animate__"
  ): Promise<unknown> =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);

      node.classList.add(`${prefix}animated`, animationName);

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event: AnimationEvent) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve("Animation ended");
      }

      node.addEventListener("animationend", handleAnimationEnd, { once: true });
    });

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
    const text = document.querySelector(".slide-text") as HTMLElement;
    if (text) {
      text.classList.remove("animate__fadeInRight");
    }
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
