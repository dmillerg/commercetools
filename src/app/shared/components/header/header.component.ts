import { Component, inject } from '@angular/core';
import { FilterService } from '../../../core/services/filter.service';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  welcomeModal = inject(ModalService).modal;

  filterService = inject(FilterService);
  change(event: any) {
    this.filterService.value.set(event);
  }
}
