import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
  }

  signUpButtonClick(){
  this.router.navigate(['register']);
  }

  onSubmit(){
    this.authService.login(this.loginForm.value as User)
  }
}
