import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private isDialogOpen = false;

  constructor() {}

  isDialogCurrentlyOpen(): boolean {
    return this.isDialogOpen;
  }

  setDialogOpenState(state: boolean): void {
    this.isDialogOpen = state;
  }
}