import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  registerForm = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
  });

  ngOnInit(): void {

  }

  LogInButtonClick(){
    this.router.navigate(['login']);
  }

  SignUpButtonClick(){
    if(this.registerForm.valid){
      const user: User = {
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value
      }
      this.authService.register(user);
    }
  }

}
