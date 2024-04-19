import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent implements OnChanges {
  @Input() data: any[] = [];
  @Input() pageSize = 10;
  @Output() pageChange = new EventEmitter<any[]>();

  currentPage = 1;
  totalPages = Math.ceil(this.data.length / this.pageSize);
  pages: number[] = [];

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.data.length / this.pageSize);
    this.changePages();
    // this.emitPageChange();
  }

  changePages() {
    this.pages = [
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2,
      this.currentPage + 3,
      this.currentPage + 4,
    ];
  }

  get pageData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.emitPageChange();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      !this.pages.includes(this.currentPage) ? this.changePages() : undefined;
      this.emitPageChange();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      !this.pages.includes(this.currentPage) ? this.changePages() : undefined;
      this.emitPageChange();
    }
  }

  private emitPageChange() {
    this.pageChange.emit(this.pageData);
  }
}
