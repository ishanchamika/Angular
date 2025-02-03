import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';
import { loadEmployees, loadEmployeesSuccess, loadEmployeesFailure } from './employee.action';

@Injectable()
export class EmployeeEffects 
{
  constructor(private actions$: Actions, private apiService: ApiserviceService) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployees),
      mergeMap(() =>
        this.apiService.getAllEmployees().pipe(
          map((employees) =>{
            const employeeArray = Object.values(employees);
            return loadEmployeesSuccess({employees: employeeArray});
          }),
          catchError((error) => of(loadEmployeesFailure({ error: error.message })))
        )
      )
    )
  );
}
