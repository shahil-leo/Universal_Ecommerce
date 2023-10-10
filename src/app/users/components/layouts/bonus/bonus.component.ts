import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss']
})
export class BonusComponent implements OnInit {
  reviewSection: any[] = [];
  ngOnInit(): void {
    this.reviewSection = [
      { name: 'Duties and Taxes Guaranteed' },
      { name: 'Customer Love' },
      { name: 'Easy Return' },
      { name: 'Secure payment' },
      { name: 'Duties and Taxes Guaranteed' }
    ];
  }
}
