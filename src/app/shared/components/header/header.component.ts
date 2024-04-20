import { Component, inject } from '@angular/core';
import { FilterService } from '../../../core/services/filter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  filterService = inject(FilterService);
change(event: any){
  this.filterService.value.set(event)
}
}
