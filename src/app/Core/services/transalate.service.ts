import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TransalateService {

  private readonly _TranslateService = inject(TranslateService);
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private readonly _render2 = inject(RendererFactory2).createRenderer(null,null);
  constructor() {
    // logic
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      // 1 get Lang From  localStorage
      const savedLang = localStorage.getItem('lang');
      // 2 Set a  DefaultLang Lang
      this._TranslateService.setDefaultLang('en');
      // 3 Use  a   Lang   From  localStorage

      // 4 Direction ==> En => LTR || AR => RTL

      this.SetLang();
    }
   }


   SetLang() {
    const savedLang = localStorage.getItem('lang');
    if(savedLang !== null){
      this._TranslateService.use(savedLang!);

    }

    if (savedLang === 'en') {
      this._render2.setAttribute(  document.documentElement ,'dir' , 'ltr')
      this._render2.setAttribute(  document.documentElement ,'lang' , 'en')

    } else if (savedLang === 'ar') {
      this._render2.setAttribute(  document.documentElement ,'dir' , 'rtl')
      this._render2.setAttribute(  document.documentElement ,'lang' , 'ar')


    }
  }

  ChangeLang(lang: string) {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      localStorage.setItem('lang', lang);
      this.SetLang();
    }
  }
}
