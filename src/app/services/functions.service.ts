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
    if (e.target.classList.contains('plus')) {
      e.target.style.display = e.target.style.display === 'none' ? 'block' : 'none';
      e.target.nextElementSibling.style.display = e.target.style.display === 'block' ? 'none' : 'block';
    }

    if (e.target.classList.contains('minus')) {
      e.target.style.display = e.target.style.display === 'none' ? 'block' : 'none';
      e.target.previousSibling.style.display = e.target.style.display === 'block' ? 'none' : 'block';
    }

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
