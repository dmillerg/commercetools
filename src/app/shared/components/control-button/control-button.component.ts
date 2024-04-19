import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Button } from '../button/model/button.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-button',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './control-button.component.html',
  styleUrl: './control-button.component.scss',
})
export class ControlButtonComponent {
  @Input() value: number = 1;
  buttonMore: Button[] = [
    {
      icon: 'bi-plus',
      type: 'outline',
      click: () => this.value++,
    },
  ];
  buttonLess: Button[] = [
    {
      icon: 'bi-dash',
      type: 'outline',
      disable: () => this.value <= 1,
      click: () => this.value--,
    },
  ];
}
