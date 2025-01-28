import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit
{
  constructor(private service:ApiserviceService, private router:Router)
  {
  }

  errmsg:any;
  errmsgshow=false;

  signupForm = new FormGroup(
  {
    name: new FormControl('', Validators.required),
    email:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required)
  });

  ngOnInit(): void
  {
  }

  async signupSubmit() 
  {
    if(this.signupForm.valid) 
    {
      this.errmsgshow = false;
      console.log(this.signupForm.value);
  
      try 
      {
        const res = await this.service.signup(this.signupForm.value).toPromise();
        if(res.status === true) 
        {
          window.alert(res.message);
          this.router.navigate(['login']);
        } 
        else 
        {
          console.log('Error occurred');
          this.errmsgshow = true;
          this.errmsg = res.msg || 'An error occurred'; // Use backend message if available
        }
      } 
      catch(error) 
      {
        console.error('HTTP Error', error);
        this.errmsgshow = true;
        this.errmsg = 'Failed to connect to the server';
      }
    } 
    else 
    {
      this.errmsgshow = true;
      this.errmsg = 'All fields are required';
    }
  }
}
