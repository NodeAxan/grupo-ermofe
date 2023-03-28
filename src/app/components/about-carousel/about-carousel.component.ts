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
      text: "Texto del slide 1",
    },
    {
      image: "../../assets/img/about-carousel/2.jpg",
      text: "Texto del slide 2",
    },
    {
      image: "../../assets/img/about-carousel/3.jpg",
      text: "Texto del slide 3",
    },
    {
      image: "../../assets/img/about-carousel/4.jpg",
      text: "Texto del slide 4",
    },
    {
      image: "../../assets/img/about-carousel/5.jpg",
      text: "Texto del slide 5",
    },
    {
      image: "../../assets/img/about-carousel/6.jpg",
      text: "Texto del slide 6",
    },
    {
      image: "../../assets/img/about-carousel/7.jpg",
      text: "Texto del slide 7",
    },
    {
      image: "../../assets/img/about-carousel/8.jpg",
      text: "Texto del slide 8",
    },
  ];

  currentIndex = 0;
  isLastSlide = false;
  isFirstSlide = false;

  ngOnInit() {
    this.updateSlidePosition();
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
