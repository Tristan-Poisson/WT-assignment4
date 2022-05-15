import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../auth/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  public loginError!:String;

  constructor(private apiService:ApiService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){  
    if(this.signupForm.valid){
      if(this.apiService.signup(this.signupForm.value) === 200 ){
          this.router.navigate(['/dashboard']);
      }   
    }
  }    
}
