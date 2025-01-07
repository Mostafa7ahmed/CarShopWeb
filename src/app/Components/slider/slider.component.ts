import { Brand } from './../../Core/Interface/Brand';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from '../../Core/services/brand.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule , RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {


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

  brands:Brand[]=[];
  

private _brandService = inject(BrandService)

  ngOnInit(): void {
    this.loadData();
    
  }
  async loadData() {
    this.brands = await this._brandService.getTableData();

  }
}
