import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cardetails',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './cardetails.component.html',
  styleUrl: './cardetails.component.scss'
})
export class CardetailsComponent {



  arrLogo=[1,2,3,4,8]
  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      rtl:true,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause: true,
      dots: true,
      navSpeed: 700,
      items:1,
      nav: false,
    }
}
