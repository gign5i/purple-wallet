import { Component, inject, OnInit } from '@angular/core';
import { navbarConfig } from '../../config/navbar.config';
import { LinkComponent } from '../link/link.component';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [LinkComponent, NgOptimizedImage, RouterLinkActive, RouterLink],
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  standalone: true,
})
export class NavbarComponent implements OnInit {
  protected readonly navbarConfig = navbarConfig;
  public activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log('test: ', this.activeRoute.snapshot.url);
  }
}
