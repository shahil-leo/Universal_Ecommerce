import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items:any

constructor(){}

  ngOnInit(): void {

  }
}
