import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-welcome-modal',
  standalone: true,
  imports: [],
  templateUrl: './welcome-modal.component.html',
  styleUrl: './welcome-modal.component.scss',
})
export class WelcomeModalComponent {
  @Output() close = new EventEmitter<any>();
  emit() {
    localStorage.setItem('offer', 'checked');
    this.close.emit();
  }
}
