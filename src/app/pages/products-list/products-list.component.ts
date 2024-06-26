import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { DataService } from '../../core/services/data.service';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';
import { Button } from '../../shared/components/button/model/button.model';
import { Router } from '@angular/router';
import { FilterPipe } from '../../core/pipes/filter.pipe';
import { FilterService } from '../../core/services/filter.service';
import { WelcomeModalComponent } from '../../shared/components/welcome-modal/welcome-modal.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    PaginatorComponent,
    PaginatorComponent,
    FilterPipe,
    WelcomeModalComponent,
  ],
  providers: [DataService],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  router = inject(Router);
  _dataService = inject(DataService);
  data: any[] = [];
  categorys: string[] = [];
  button: Button[] = [
    {
      label: 'buy',
      icon: 'bi-cart3',
      class: 'w-full mt-2',
      click: (data: any) => {
        this.router.navigate(['products/detail', { name: data.Keywords }]);
      },
    },
  ];
  pageSize: number = 0;
  currentPageData: any[] = [];
  filter = inject(FilterService);
  categorySelected = this.filter.value;

  onPageChange(data: any[]) {
    this.scrollToTop();
    this.currentPageData = data;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.currentPageData = Array(10).fill({ loading: true });
    this._dataService
      .getData()
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.data = response.map((e) => {
            if (!this.categorys.includes(e.Category))
              this.categorys.push(e.Category);
            return {
              card: {
                img: e.Image !== '' ? e.Image : e.Image1,
                name: e.Name,
                price: Number(e.Price.substring(1)),
                description: e.Description_title,
                votes: e.Reviews.votes,
                rating: e.Reviews.rating,
                data: e,
              },
              click: () =>
                this.router.navigate(['products/detail', { name: e.Keywords }]),
              loading: false,
            };
          });
          this.pageSize = this.data.length;
          this.currentPageData = this.data.slice(0, 10);
        },
      });
  }

  scrollToTop() {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  }
}
