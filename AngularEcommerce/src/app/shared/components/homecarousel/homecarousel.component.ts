import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

@Component({
  selector: 'app-homecarousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homecarousel.component.html',
  styleUrl: './homecarousel.component.css'
})
export class HomecarouselComponent implements AfterViewInit {
  slides = ['https://saransh-ecommbucket.s3.ap-south-1.amazonaws.com/s1.jpg','https://saransh-ecommbucket.s3.ap-south-1.amazonaws.com/s2.jpg','/p3.jpg'];

  ngAfterViewInit(): void {
    new Swiper('.mySwiper', {
      modules: [Pagination], // Add modules here
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
  }
}