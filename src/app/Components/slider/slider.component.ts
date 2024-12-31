import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rtl:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false,
  }

  arrLogo:string[]=
  [
   'Images/bmw.svg',
   'Images/bmw.svg',

   'Images/bmw.svg',
   'Images/bmw.svg',
   'Images/bmw.svg',
   'Images/bmw.svg',
   'Images/bmw.svg',
   'Images/bmw.svg',
   'Images/bmw.svg',

   
  ]
}
