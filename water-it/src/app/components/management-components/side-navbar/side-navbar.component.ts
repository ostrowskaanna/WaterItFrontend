import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  dashboardClick(): void {
    this.router.navigate(['/management', { outlets: { 'management-page': ['dashboard'] } }]);
  }

  devicesClick(): void {
    this.router.navigate(['/management', { outlets: { 'management-page': ['devices'] } }]);
  }

}
