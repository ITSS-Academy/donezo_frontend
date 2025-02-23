import { Injectable } from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private drawer!: MatDrawer;
  private isOpenSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  // Register the drawer component
  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  // Toggle drawer
  toggle() {
    if (this.drawer) {
      this.drawer.toggle();
      this.isOpenSubject.next(this.drawer.opened);
    }
  }

  // Get drawer state as Observable (if needed for UI changes)
  getDrawerState() {
    return this.isOpenSubject.asObservable();
  }
}
