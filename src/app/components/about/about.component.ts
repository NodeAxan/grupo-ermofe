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
      text: 'Nuestro fundador, al graduarse de ingeniero civil, comenzó a trabajar con su papá quien desde pequeño inculcó en él, el gusto por la ingeniería civil, realizando obras como puentes tubulares y piloteos.',
      img: '../../../assets/img/about/2-ernestos.jpg'
    },
    {
      title: '1993',
      text: 'El ingeniero emprende por su cuenta, realizando diferentes tipos de proyectos para el sector público y privado.',
      img: '../../../assets/img/about/puente-tubular.jpg'
    },
    {
      title: '2003',
      text: 'Por la alta demanda de obras en el estado de Tabasco constituye formalmente GRUPO ERMOFE, realizando proyectos como puentes, escuelas y obras privadas.',
      img: '../../../assets/img/about/primer-logo.jpeg'
    },
    {
      title: '2012',
      text: 'El hijo de nuestro fundador siguió los pasos de su padre y, al graduarse de ingeniero civil, comienza a trabajar en empresas privadas en el estado de Jalisco, adquiriendo conocimiento y experiencia.',
      img: '../../../assets/img/about/3-ernestos.jpg'
    },
    {
      title: '2014',
      text: 'Vuelve a Tabasco para integrarse a Grupo Ermofe, con el objetivo de transformar la movilidad vial y peatonal, integrando a la industria de la construcción productos innovadores que otorgan un gran costo beneficio, tanto al cliente como al usuario.',
      img: '../../../assets/img/about/ing-neto-puente.png'
    },
    {
      title: '2015',
      text: 'Hay una Instalamos el primer puente peatonal de aluminio marino en la ciudad de Villahermosa, Tabasco.',
      img: '../../../assets/img/about/primer-puente-peatonal.jpg'
    },
    {
      title: '2019',
      text: 'Este año nos posicionamos al frente del mercado, instalando más de 10 estructuras de aluminio marino, entre ellas, el puente más largo sin apoyo intermedio y los parapetos del nuevo puente La Unidad en Campeche.',
      img: '../../../assets/img/about/parapeto.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
