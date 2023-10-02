import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { CarouselHeroComponent } from '../../layouts/carousel-hero/carousel-hero.component';
import { BrandSectionComponent } from '../../layouts/brand-section/brand-section.component';
import { ShowCaseComponent } from '../../layouts/show-case/show-case.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavbarComponent,CarouselHeroComponent,BrandSectionComponent,ShowCaseComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
