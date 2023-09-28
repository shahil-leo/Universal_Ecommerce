import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { CarouselHeroComponent } from '../../layouts/carousel-hero/carousel-hero.component';
CarouselHeroComponent

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavbarComponent,CarouselHeroComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
