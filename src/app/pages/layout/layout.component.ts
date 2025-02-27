import {Component, ViewChild} from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {NotificationsComponent} from "../../components/notifications/notifications.component";
import {RouterOutlet} from "@angular/router";
import {SearchComponent} from "../../components/search/search.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    NotificationsComponent,
    RouterOutlet,
    SearchComponent,
    SidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  isDrawerOpen = false;
  activeDrawer: string | null = null;

  constructor() {
  }

  toggleDrawer(drawerName: string) {
    console.log(drawerName);
    console.log(this.activeDrawer);
    if (this.activeDrawer === drawerName) {
      this.isDrawerOpen = false;
      this.activeDrawer = null;
      this.drawer.close()
    } else if (drawerName == 'Search' || drawerName == 'Notifications') {
      this.activeDrawer = drawerName;
      this.isDrawerOpen = true;
      if (!this.drawer.opened) {
        this.drawer.open();
      }
    } else {
      this.isDrawerOpen = false;
      this.activeDrawer = null;
      this.drawer.close()
    }
  }

  resetActiveName() {
    this.activeDrawer = null;
    this.isDrawerOpen = false;
  }
}
