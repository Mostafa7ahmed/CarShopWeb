import { Component } from '@angular/core';
import { BannerComponent } from "../../Components/banner/banner.component";
import { SliderComponent } from "../../Components/slider/slider.component";
import { BodyComponent } from "../../Components/notfound/body/body.component";
import { CartypeComponent } from "../../Components/cartype/cartype.component";
import { ContactComponent } from "../../Components/contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, SliderComponent, BodyComponent, CartypeComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
