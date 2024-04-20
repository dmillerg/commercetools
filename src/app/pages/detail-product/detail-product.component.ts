import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Item } from '../../core/models/item.model';
import { CommonModule } from '@angular/common';
import { RatingBarComponent } from '../../shared/components/rating-bar/rating-bar.component';
import { ControlButtonComponent } from '../../shared/components/control-button/control-button.component';
import { Button } from '../../shared/components/button/model/button.model';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [
    CommonModule,
    RatingBarComponent,
    ControlButtonComponent,
    ButtonComponent,
  ],
  providers: [DataService],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
})
export class DetailProductComponent implements OnInit {
  _dataService = inject(DataService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  data?: Item;
  buttonsBuy: Button[] = [
    {
      label: 'Buy now',
      class: 'w-full',
      click: () => '',
    },
    {
      label: 'Add to Cart',
      class: 'w-full',
      type: 'outline',
      click: () => '',
    },
  ];

  classLoad:string = ''

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.params['name'];
    this._dataService
      .getData()
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.data = response.filter((e) => e.Name === name)[0];
          this.data.Price = this.data.Price.substring(1);
        },
      });
  }

  changeImage() {
    const image = this.data!.Image1;
    this.data!.Image1 = this.data!.Image;
    this.data!.Image = image;
  }
}
