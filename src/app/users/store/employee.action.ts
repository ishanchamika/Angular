import { createAction, props } from '@ngrx/store';
import { Employee } from './employee';

export const loadEmployees = createAction('[Employee] Load Employees');
export const loadEmployeesSuccess = createAction( '[Employee] Load Employees Success', props<{ employees: Employee[] }>());
export const loadEmployeesFailure = createAction('[Employee] Load Employees Failure', props<{ error: any }>());