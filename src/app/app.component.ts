import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
  constructor(private router:Router){}
  title = 'general';

  ngOnInit(): void 
  {
    
  }
  logout() 
  {
    if(window.confirm("Confirm Logout")) 
    {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }
  
  
}
