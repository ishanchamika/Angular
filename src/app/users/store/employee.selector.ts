import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EmployeeState } from './employee.reducer';

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee');

export const selectEmployees = createSelector(
  selectEmployeeState,
  (state) => state.employees
);