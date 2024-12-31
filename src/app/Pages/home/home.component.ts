import { Component } from '@angular/core';
import { BannerComponent } from "../../Components/banner/banner.component";
import { SliderComponent } from "../../Components/slider/slider.component";
import { BodyComponent } from "../../Components/body/body.component";
import { CartypeComponent } from "../../Components/cartype/cartype.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, SliderComponent, BodyComponent, CartypeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
