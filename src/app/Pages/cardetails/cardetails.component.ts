import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AllcarService } from '../../Core/services/allcar.service';
import { Car } from '../../Core/Interface/car';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cardetails',
  standalone: true,
  imports: [CarouselModule , TranslateModule],
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.scss'] // Fixed 'styleUrl' to 'styleUrls'
})
export class CardetailsComponent implements OnInit {

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
    navText: ['', ''],
  
    nav: false,
    items:1,
   }
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _allcarService = inject(AllcarService);
  car: Car = {} as Car;

  ngOnInit(): void {
    this.loadCarData(); // Ensure data is loaded on initialization
  }

  async loadCarData(): Promise<void> {
    try {
      // Extract the car ID from the route parameters
      const carId = this._activatedRoute.snapshot.paramMap.get('idCar');

      this.car = await this._allcarService.getCar(Number(carId));
      console.log('Car Details:', this.car); 
    } catch (error) {
      console.error('Error loading car data:', error);
    }
  }
}
