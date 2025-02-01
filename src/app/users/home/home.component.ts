import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit 
{
  constructor(private router:Router, private service:ApiserviceService){}
  ngOnInit(): void 
  {
    const token = localStorage.getItem('auth_token');
    if(!token)
    {
      window.alert('Please login first');
      this.router.navigate(['login']);
      return;
    }

    this.GetEmployeesData();
  }

  async GetEmployeesData()
  {
    try
    {
      const res = await firstValueFrom(this.service.getAllEmployees());
      if(res)
      {
        console.log(res);
      }
      else
      {
        console.error('Failed to fetch employees data:');
      }
    }
    catch(error)
    {
      console.error('Error fetching employees data:', error);
    }
  }
}
