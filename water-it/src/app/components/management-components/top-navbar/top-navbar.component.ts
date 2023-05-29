import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  username: string | null;

  constructor(public authService: AuthService) { 
    this.username = window.localStorage.getItem('username');
  }

  ngOnInit(): void { }

  logOutButtonClick() {
    if(this.authService.isLoggedIn)
      this.authService.doLogout();
  }

}
