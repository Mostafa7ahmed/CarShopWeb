import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car } from '../../Core/Interface/car';
import { AllcarService } from '../../Core/services/allcar.service';
@Component({
  selector: 'app-cartype',
  standalone: true,
  imports: [CarouselModule, RouterLink],
  templateUrl: './cartype.component.html',
  styleUrl: './cartype.component.scss'
})
export class CartypeComponent implements OnInit{

  carType:Car[] =[];

  private _allcar = inject(AllcarService)
  
    ngOnInit(): void {
      this.loadData();
      
    }
    async loadData() {
      this.carType = (await this._allcar.getTableData()).slice(0,8);
      console.log(this.carType)
  
    }


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
