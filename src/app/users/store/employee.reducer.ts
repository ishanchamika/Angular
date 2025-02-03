import { createReducer, on } from "@ngrx/store";
import { loadEmployees, loadEmployeesSuccess, loadEmployeesFailure } from "./employee.action";
import { Employee } from "./employee";

export interface EmployeeState 
{
    employees: Employee[];
  }

export const initialState: EmployeeState = 
{
    employees: [],
};
  
export const employeeReducer = createReducer(
    initialState,
    on(loadEmployeesSuccess, (state, { employees }) => ({
      ...state,
      employees
    }))
  );