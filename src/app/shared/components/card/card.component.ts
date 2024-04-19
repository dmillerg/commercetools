import { Component, Input } from '@angular/core';
import { Card } from './model/card.model';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Button } from '../button/model/button.model';
import { ControlButtonComponent } from '../control-button/control-button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ControlButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card!: Card;
  @Input() button:Button[]=[];
}
