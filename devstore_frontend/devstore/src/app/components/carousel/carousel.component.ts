import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    { src: './assets/img1.jpeg', title: 'Artículo 1', description: 'Lo último. Échale un vistazo a la potencia', price: 'Desde $25,999' },
    { src: './assets/img2.jpeg', title: 'Artículo 2', description: 'Disfruta del poder para hacerlo todo', price: 'Desde $19,999' },
    { src: './assets/img3.jpeg', title: 'Artículo 3', description: 'Delgado. Estilizado. Avanzado.', price: 'Desde $9,499' },
    { src: './assets/img1.jpeg', title: 'Artículo 4', description: 'Lo último. Échale un vistazo a la potencia', price: 'Desde $25,999' },
    { src: './assets/img2.jpeg', title: 'Artículo 5', description: 'Disfruta del poder para hacerlo todo', price: 'Desde $19,999' },
    { src: './assets/img3.jpeg', title: 'Artículo 6', description: 'Delgado. Estilizado. Avanzado.', price: 'Desde $9,499' },
    { src: './assets/img1.jpeg', title: 'Artículo 7', description: 'Lo último. Échale un vistazo a la potencia', price: 'Desde $25,999' },
    { src: './assets/img2.jpeg', title: 'Artículo 8', description: 'Disfruta del poder para hacerlo todo', price: 'Desde $19,999' },
    { src: './assets/img3.jpeg', title: 'Artículo 9', description: 'Disfruta del poder para hacerlo todo', price: 'Desde $19,999' },
    { src: './assets/img1.jpeg', title: 'Artículo 10', description: 'Disfruta del poder para hacerlo todo', price: 'Desde $19,999' },
    { src: './assets/img2.jpeg', title: 'Artículo 11', description: 'Disfruta del poder para hacerlo todo', price: 'Desde $19,999' }
  ];
  currentClick = 0;
  // divisor, dividend, 
  quotient = Math.trunc(this.images.length / 3);
  residual = this.images.length % 3;
  totalClics = this.residual == 0 ? this.quotient - 1 : this.quotient;

  prev() {
    console.log('totalClics: ', this.totalClics);
    this.currentClick = (this.currentClick > 0) ? this.currentClick - 1 : this.totalClics;
    // let a = this.images.length;
    // let b = 3;
    // let residuo = a % b;
    // console.log('residuo: ', residuo);
    // Math.trunc(cociente)
    // console.log('quocient:', this.quotient); 
    // console.log('residual: ', this.residual); 
  }

  next() {
    console.log('totalClics: ', this.totalClics);
    this.currentClick = (this.currentClick < this.totalClics) ? this.currentClick + 1 : 0;
    console.log('currentClick: ', this.currentClick);
    console.log('quocient:', this.quotient); 
    console.log('residual: ', this.residual);
  }

  // getVisibleImages() {
  //   console.log('getVisibleImages()');
  //   const start = this.currentClick;
  //   const end = (this.currentClick + 2) % this.images.length;
  //   if (end > start) {
  //     console.log('end > start: ');
  //     console.log('end: ', end, ' start: ', start);
  //     return this.images.slice(start, end);
  //   } else {
  //     console.log('end: ', end, ' start: ', start);
  //     return [...this.images.slice(start), ...this.images.slice(0, end)];
  //   }
  // }

  getTransform() {
    // console.log(this.currentClick);
    return `translateX(-${this.currentClick * 100}%)`;
  }

}
