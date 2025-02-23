import {Component, signal, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MaterialModule} from './shared/modules/material.module';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SearchComponent} from './components/search/search.component';
import {MatDrawer} from '@angular/material/sidenav';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, SidebarComponent, SearchComponent, NotificationsComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'donezo_frontend';

  @ViewChild('drawer') drawer!: MatDrawer;

  isDrawerOpen = false;
  activeDrawer: string | null = null;

  constructor() {}

  toggleDrawer(drawerName:string) {
    console.log(drawerName);
    console.log(this.activeDrawer);
    if (this.activeDrawer === drawerName) {
      this.isDrawerOpen = false;
      this.activeDrawer = null;
      this.drawer.close()
    } else if (drawerName == 'Search' || drawerName == 'Notifications') {
      this.activeDrawer = drawerName;
      this.isDrawerOpen = true;
      if (!this.drawer.opened){
        this.drawer.open();
      }
    }else {
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
