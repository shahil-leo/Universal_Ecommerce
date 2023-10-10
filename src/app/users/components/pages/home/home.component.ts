import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { CarouselHeroComponent } from '../../layouts/carousel-hero/carousel-hero.component';
import { BrandSectionComponent } from '../../layouts/brand-section/brand-section.component';
import { ShowCaseComponent } from '../../layouts/show-case/show-case.component';
import { FeaturedProductsComponent } from '../../layouts/featured-products/featured-products.component';
import { PostersComponent } from '../../layouts/posters/posters.component';
import { BonusComponent } from '../../layouts/bonus/bonus.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CarouselHeroComponent,
    BrandSectionComponent,
    ShowCaseComponent,
    FeaturedProductsComponent,
    PostersComponent,
    BonusComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
