import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit
{
  constructor(private service: ApiserviceService, private router:Router)
  {
  }

  errmsg:any;
  errmsgshow = false;

  LoginForm = new FormGroup(
  {
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void 
  {
    
  }

  async LoginSubmit()
  {
      if(this.LoginForm.valid)
      {
        this.errmsgshow = false;
        try
        {
          const res = await firstValueFrom(this.service.login(this.LoginForm.value));
          if(res.status === true && res.token)
          {
            console.log(res);
            this.errmsgshow = false;
            window.alert(res.message);
            this.router.navigate(['home']);
          }
          else
          {
            this.errmsgshow = true;
            this.errmsg = res.msg;
          }
        }
        catch(error)
        {
          this.errmsgshow = true;
          if(error instanceof HttpErrorResponse) 
          {
            this.errmsg = error.error?.message || 'Unexpected error occurred';
          }
          else
          {
            console.error('HTTP Error', error);
            this.errmsg = 'Failed to connect to the server';
          }
        }
      }
      else
      {
        this.errmsgshow = true;
        this.errmsg = "All fields are required";
      }
  }
}
