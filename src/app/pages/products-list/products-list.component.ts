import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { DataService } from '../../core/services/data.service';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CardComponent, CommonModule, PaginatorComponent],
  providers: [DataService],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  _dataService = inject(DataService);
  data: any[] = [];
  categorys: string[] = [];

  ngOnInit(): void {
    this._dataService
      .getData()
      .pipe(take(1))
      .subscribe({
        next: (response) =>
          (this.data = response.map((e) => {
            if (!this.categorys.includes(e.Category))
              this.categorys.push(e.Category);
            return {
              ...e,
              img: e.Image !== '' ? e.Image : e.Image1,
              name: e.Name,
              price: Number(e.Price.substring(1)),
              description: e.Description_title,
              votes: e.Reviews.votes,
              rating: e.Reviews.rating,
            };
          })),
      });
  }
}
