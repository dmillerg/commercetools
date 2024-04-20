import { Component, Input } from '@angular/core';
import { Card } from './model/card.model';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Button } from '../button/model/button.model';
import { ControlButtonComponent } from '../control-button/control-button.component';
import { RatingBarComponent } from '../rating-bar/rating-bar.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent,RatingBarComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card!: Card;
  @Input() button:Button[]=[];
  @Input() data?: any;
}
