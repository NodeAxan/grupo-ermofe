import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public timeline: { title: string, text: string, img?: string }[] = [
    {
      title: '1990',
      text: 'Nuestro fundador, al graduarse de ingeniero civil, comenzó a trabajar con su papá quien desde pequeño inculcó en él, el gusto por esta profesión, realizando obras como puentes tubulares y piloteos.',
    },
    {
      title: '1993',
      text: 'Nuestro fundador decidió emprender por su cuenta realizando diferentes tipos de proyectos para el sector público y privado.',
      img: '../../../assets/img/banners/banner-contact.jpg'
    },
    {
      title: '2003',
      text: 'Por la alta demanda de obras en el estado de Tabasco constituye formalmente junto con su esposa, GRUPO ERMOFE, realizando proyectos como puentes, escuelas y obras privadas.',
      img: '../../../assets/img/banners/banner-contact.jpg'
    },
    {
      title: '2012',
      text: 'Nuestro Director Operativo decide seguir los pasos de su padre y, al graduarse de ingeniero civil, comienza a trabajar en empresas privadas en el estado de Jalisco, adquiriendo conocimientos y experiencia.',
      img: '../../../assets/img/banners/banner-contact.jpg'
    },
    {
      title: '2014',
      text: 'Su motivación por el crecimiento de la empresa familiar, lo trajo nuevamente a Tabasco a trabajar de la mano con nuestro fundador con el objetivo de transformar la movilidad vial y peatonal, integrando a la industria de la construcción productos que otorgan un gran costo beneficio, tanto al cliente como al usuario.',
    },
    {
      title: '2015',
      text: 'Instalamos el primer puente peatonal de aluminio marino en la ciudad de Villahermosa, Tabasco.',
    },
    {
      title: '2019',
      text: 'Instalamos más de 10 estructuras de aluminio marino, entre ellas el puente más largo sin apoyo intermedio, y los parapetos del nuevo puente la unidad, posicionándonos este año al frente del mercado.',
      img: '../../../assets/img/banners/banner-contact.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
