import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cartype',
  standalone: true,
  imports: [CarouselModule, RouterLink],
  templateUrl: './cartype.component.html',
  styleUrl: './cartype.component.scss'
})
export class CartypeComponent {

  carType =[1,2,3,4,5,6,7,8]


    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause: true,
      dots: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 2
        },
        940: {
          items: 4
        }
      },
      nav: false,
    }
}
