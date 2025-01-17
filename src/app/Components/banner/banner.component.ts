import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
     customOptions: OwlOptions = {
       loop: true,
       mouseDrag: true,
       touchDrag: true,
       pullDrag: false,
       rtl:true,
       autoplay:true,
       autoplayTimeout:5000,
       autoplayHoverPause: true,
       dots: false,
       navSpeed: 2000,
       navText: ['', ''],
     
       nav: false,
       items:1,
      }

  brands:number[]=[1,3,4,5];


}
