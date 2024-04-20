import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-welcome-modal',
  standalone: true,
  imports: [],
  templateUrl: './welcome-modal.component.html',
  styleUrl: './welcome-modal.component.scss',
})
export class WelcomeModalComponent {
  welcomeModal = inject(ModalService).modal;
  emit() {
    localStorage.setItem('offer', 'checked');
    this.welcomeModal.set(false);
  }
}
