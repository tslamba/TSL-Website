import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  EffectFade,
  Pagination,
  Swiper,
  Navigation,
  Autoplay,
  A11y,
} from 'swiper';
SwiperCore.use([EffectFade, Pagination, Navigation, Autoplay, A11y,]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config: any;
  fullpage_api: any;


  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['home', 'products', 'whywe', 'support', 'client'],
      navigation: true,
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      scrollBar: false,
      easing: 'easeInOutCubic',
      scrollOverflow: true
    };
  }

  swiperConfig1: any = {
    slidesPerView: '1',
    spaceBetween: 0,
    autoplay: true,
    loop: true,
    // effect: 'fade',
    breakpoints: {
      320: {
        slidesPerView: 1,

      },
      480: {
        slidesPerView: 1,
        centeredSlides: true
      },
      720: {
        slidesPerView: 1,
        centeredSlides: true
      },
      1200: {
        slidesPerView: 1,
        centeredSlides: true
      }
    }
  }

  swiperConfig: any = {
    slidesPerView: '4',
    spaceBetween: 10,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  }


  ngOnInit(): void {

  }


}
