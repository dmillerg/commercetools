import { Component, Input } from '@angular/core';
import { Button } from './model/button.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttons: Button[] = [];

  click(fun: Function) {
    fun();
  }

  disabled(fun?: Function) {
    return fun ? fun() : false;
  }
}
