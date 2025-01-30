import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  standalone: false,
  
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.css'
})
export class TutorialComponent implements OnInit
{
  constructor(private router:Router)
  {
  }

  ngOnInit(): void 
  {
    const token = localStorage.getItem('auth_token');
    if(!token)
    {
      window.alert('Please login first');
      this.router.navigate(['login'])
    }
  }
}
