import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modal = signal(!localStorage.getItem('offer'));
  constructor() {}
}
