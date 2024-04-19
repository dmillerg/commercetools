import { Component, Input } from '@angular/core';
import { Button, ButtonType } from './model/button.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttons: Button[] = [];
  @Input() data?: any;

  click(fun: Function): void {
    fun(this.data);
  }

  disabled(fun?: Function): boolean {
    return fun ? fun() : false;
  }

  class(type?: ButtonType): string {
    if (type) {
      if (type === 'primary') {
        return 'bg-primary-500 hover:bg-primary-700 focus:bg-primary-600 text-white';
      }
      if (type === 'outline') {
        return 'bg-transparent border border-primary-500 hover:bg-primary-100 focus:bg-primary-100 text-primary-500';
      }
    }
    return 'bg-primary-500 hover:bg-primary-700 focus:bg-primary-600 text-white';
  }
}
