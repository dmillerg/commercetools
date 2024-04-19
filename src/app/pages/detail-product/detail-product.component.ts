import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Item } from '../../core/models/item.model';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [],
  providers: [DataService],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
})
export class DetailProductComponent implements OnInit {
  _dataService = inject(DataService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  data?: Item;

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['name']);

    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        const name: any = params['name'] || null;
        this._dataService
          .getData()
          .pipe(take(1))
          .subscribe({
            next: (response) => {
              this.data = response.filter((e) => e.Name === name)[0];
            },
          });
      },
    });
  }
}
