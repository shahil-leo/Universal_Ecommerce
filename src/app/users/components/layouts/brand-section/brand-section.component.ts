import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface brandListModal {
  font: string;
  brandName: string;
}

@Component({
  selector: 'app-brand-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-section.component.html',
  styleUrls: ['./brand-section.component.scss']
})
export class BrandSectionComponent implements OnInit {
  brandList: brandListModal[] = [];

  constructor() {}

  ngOnInit(): void {
    this.brandList = [
      {
        font: '',
        brandName: 'Nike'
      },
      {
        font: '',
        brandName: 'Gucci'
      },
      {
        font: '',
        brandName: 'Puma'
      },
      {
        font: '',
        brandName: 'Adidas'
      }
    ];
  }
  getBrandListProducts(brandName: string) {}
}
