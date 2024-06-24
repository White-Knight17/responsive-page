import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

//COMPONENTES
import { CoupensComponent } from './components/coupens/coupens.component';
import { PagesComponent } from './components/pages/pages.component';
import { BodyComponent } from './components/body/body.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MediaComponent } from './components/media/media.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CoupensComponent, PagesComponent,
    BodyComponent, BodyComponent, DashboardComponent,
    MediaComponent, SidenavComponent, SettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-responsive';
}
