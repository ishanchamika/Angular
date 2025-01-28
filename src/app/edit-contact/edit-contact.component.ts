import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  standalone: false,
  
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit
{

  constructor()
  {
  }

  registerForm: any;

  ngOnInit(): void
  {
     this.registerForm = new FormGroup({
      "name": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "phone": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      "salary": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
     })
  }

  submitData()
  {
      console.log(this.registerForm.value);

      if(this.registerForm.valid)
      {
        alert(`thanks ${this.registerForm.value.name}`);
        this.registerForm.reset();
      }
  }

  get nameV()
  {
    return this.registerForm.get('name');
  }
  get emailV()
  {
    return this.registerForm.get('email');
  }

  get phoneV()
  {
    return this.registerForm.get('phone');
  }

  get salaryV()
  {
    return this.registerForm.get('salary');
  }
}
