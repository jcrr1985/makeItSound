import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  instrumentos = [
    {
      name: 'Flauta',
      image: 'assets/imagenes/flauta.png',
      sound: 'assets/sonidos/flauta.mp3'

    },
    {
      name: 'Bombo 1',
      image: 'assets/imagenes/bombo1.png',
      sound: 'assets/sonidos/bombo1.mp3'

    },
    {
      name: 'Bombo 2',
      image: 'assets/imagenes/bombo2.png',
      sound: 'assets/sonidos/bombo2.mp3'

    },
    {
      name: 'Platillo',
      image: 'assets/imagenes/platillos.png',
      sound: 'assets/sonidos/platillos.mp3'

    }
];
  constructor() { }

  ngOnInit() { }

  makeSound(inst) {
    const sonido = new Audio();
    sonido.src = inst.sound;
    sonido.load();
    sonido.play();
 }

}
