import { Injectable } from '@angular/core';
import Glide from '@glidejs/glide';
import { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';

@Injectable()
export class FunctionsService {

  constructor() {
  }

  carousel() {
    const glides = document.querySelectorAll('.glide');
    glides.forEach(glide => {
      new Glide(glide, {
        type: 'carousel',
        hoverpause: true,
        perView: 1,
        animationDuration: 1500
      }).mount({ Controls, Breakpoints });
    });
  }

  cardActived(e) {
    e.target.classList.toggle('mdi-plus');
    e.target.classList.toggle('mdi-minus');
    e.target.parentElement.parentElement.previousSibling.classList.toggle('cards__image--actived');
  }

  videoControls() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.controls = true;
      video.setAttribute('controlsList', 'nofullscreen nodownload');
    });
  }

}
