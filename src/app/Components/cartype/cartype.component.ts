import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car } from '../../Core/Interface/car';
import { AllcarService } from '../../Core/services/allcar.service';
import { TranslateModule } from '@ngx-translate/core';
import { SplittextPipe } from '../../Core/Pipes/splittext.pipe';
@Component({
  selector: 'app-cartype',
  standalone: true,
  imports: [CarouselModule, RouterLink, TranslateModule, SplittextPipe],
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
      pullDrag: true,
      autoplay:true,
      autoplayTimeout:2800,
      autoplayHoverPause: true,
      dots: true,
      navSpeed: 1400,
      navText: ['', ''],
      rtl:true,

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
