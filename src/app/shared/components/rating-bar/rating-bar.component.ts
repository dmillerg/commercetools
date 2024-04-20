import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-bar.component.html',
  styleUrl: './rating-bar.component.scss',
})
export class RatingBarComponent {
  @Input() rating: number = 1;
  @Input() ratingText: boolean = false;
  @Input() votes?: number;

  isHalfStar(current: number) {
    let actual = this.rating + 1 - current;
    return actual > 0 && actual < 1;
  }
}
