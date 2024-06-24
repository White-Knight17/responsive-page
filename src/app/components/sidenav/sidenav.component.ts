import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  collapse = true;
  navData = navbarData;

}
