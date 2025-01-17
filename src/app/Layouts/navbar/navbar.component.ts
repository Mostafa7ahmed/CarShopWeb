import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TransalateService } from '../../Core/services/transalate.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive , TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly _MytranslationService = inject(TransalateService);
  readonly _TranslateService = inject(TranslateService);
  ChangeLang(lang: string) {
    // Use the custom translation service to change language
    this._MytranslationService.ChangeLang(lang);
  }

  ToggleLang() {
    // Toggling between 'en' and 'ar'
    const currentLang = this._TranslateService.currentLang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    this.ChangeLang(newLang);
  }
}
