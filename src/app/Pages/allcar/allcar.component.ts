import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AllcarService } from '../../Core/services/allcar.service';
import { BodyService } from '../../Core/services/body.service';
import { BrandService } from '../../Core/services/brand.service';
import { Car } from '../../Core/Interface/car';
import { Body } from '../../Core/Interface/Body';
import { Brand } from '../../Core/Interface/Brand';
import { SplittextPipe } from '../../Core/Pipes/splittext.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-allcar',
  standalone: true,
  imports: [RouterLink , SplittextPipe, TranslateModule],
  templateUrl: './allcar.component.html',
  styleUrls: ['./allcar.component.scss']
})
export class AllcarComponent implements OnInit {
  carType: Car[] = [];
  Bodys: Body[] = [];
  Brands: Brand[] = [];

  selectedBody: string = '';
  selectedBrand: string = '';

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _allcarService = inject(AllcarService);
  private readonly _bodyService = inject(BodyService);
  private readonly _brandService = inject(BrandService);

  ngOnInit(): void {
    // Load initial data
    this.loadFiltersFromRoute();
    this.loadBodyData();
    this.loadBrandData();
  }

 
  async loadFiltersFromRoute(): Promise<void> {
    const Brand = this._activatedRoute.snapshot.paramMap.get('Brand') || '';
    const Body = this._activatedRoute.snapshot.paramMap.get('Body') || '';

    this.selectedBrand = Brand;
    this.selectedBody = Body;   

    await this.loadCarData();   
  }


  async loadCarData(): Promise<void> {
    try {
      let filter: any = {};

      if (this.selectedBody) {
        filter.body = this.selectedBody;
      }
      if (this.selectedBrand) {
        filter.Brand = this.selectedBrand;
      }


      this.carType = await this._allcarService.getTableData(filter);
      console.log('Filtered Car Data:', this.carType);
    } catch (error) {
      console.error('Error loading car data:', error);
    }
  }

  /**
   * Load all body types.
   */
  async loadBodyData(): Promise<void> {
    try {
      this.Bodys = await this._bodyService.getTableData();
      console.log('Body Data:', this.Bodys);
    } catch (error) {
      console.error('Error loading body data:', error);
    }
  }


  async loadBrandData(): Promise<void> {
    try {
      this.Brands = await this._brandService.getTableData();
      console.log('Brand Data:', this.Brands);
    } catch (error) {
      console.error('Error loading brand data:', error);
    }
  }

 
  onBrandSelect(brand: Event): void {
    const selectedValue = (brand.target as HTMLSelectElement).value; 
    this.selectedBrand= selectedValue;  
      this.loadCarData();
  }

  onBodySelect(body: Event): void {
    const selectedValue = (body.target as HTMLSelectElement).value; 
    this.selectedBody= selectedValue;
    this.loadCarData();
  }
}