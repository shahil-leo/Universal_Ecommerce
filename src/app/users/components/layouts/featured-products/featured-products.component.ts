import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
interface FeaturedProducts {
  title: string;
  price: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  items: FeaturedProducts[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        title: 'leomessi',
        price: '120Rs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '../../../../../assets/Photos/image.jpg'
      },
      {
        title: 'leomessi',
        price: '120Rs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '../../../../../assets/Photos/image.jpg'
      },
      {
        title: 'leomessi',
        price: '120Rs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '../../../../../assets/Photos/image.jpg'
      },
      {
        title: 'leomessi',
        price: '120Rs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '../../../../../assets/Photos/image.jpg'
      },
      {
        title: 'leomessi',
        price: '120Rs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '../../../../../assets/Photos/image.jpg'
      },
      {
        title: 'leomessi',
        price: '120Rs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '../../../../../assets/Photos/image.jpg'
      }
    ];
  }
}
