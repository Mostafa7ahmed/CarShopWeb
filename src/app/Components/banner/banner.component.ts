import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Banner } from '../../Core/Interface/Banner';
import { BannerService } from '../../Core/services/banner.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
     customOptions: OwlOptions = {
       loop: true,
       mouseDrag: true,
       touchDrag: true,
       pullDrag: true,
       rtl:true,
       autoplay:true,
       autoplayTimeout:5000,
       autoplayHoverPause: true,
       dots: true,
       navSpeed: 2000,
     
       nav: false,
       items:1,
      }

      bannerImages:Banner[] =[];

      private _allcar = inject(BannerService)
      
        ngOnInit(): void {
          this.loadData();
          
        }
        async loadData() {
          this.bannerImages = (await this._allcar.getTableData()).slice(0,8);
          console.log(this.bannerImages)
      
        }
    

}
