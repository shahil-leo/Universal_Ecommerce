import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';

interface responsiveOptionsList {
  breakpoint:string,
  numVisible:number
}
interface imageList{
  imageTitle:string
  itemImageSrc:string
  color:string
}

@Component({
  selector: 'app-carousel-hero',
  standalone: true,
  imports: [CommonModule,GalleriaModule,FormsModule],
  templateUrl: './carousel-hero.component.html',
  styleUrls: ['./carousel-hero.component.scss']
})
export class CarouselHeroComponent implements OnInit {

  responsiveOptions:responsiveOptionsList[]=[]
  images:imageList[]=[]
  constructor (){}

  ngOnInit(): void {
  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

this.images=[
  {
    imageTitle:'SUMMER SALE GEt 30% OFF On all dress',
    itemImageSrc:'../../../../../assets/Photos/image.jpg',
    color:'black'
  },
  {
    imageTitle:'There are something that does not change as we go into further moves then we are dead',
    itemImageSrc:'../../../../../assets/Photos/Rectangle 7.1.jpg',
    color:'black'
  },
  {
    imageTitle:'kannpi',
    itemImageSrc:'../../../../../assets/Photos/download (2).jpeg',
    color:'white'
  }
]
  }


}
