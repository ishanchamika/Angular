export interface Employee {
    id: string;
    name: string;
    email: string;
    phone: string;
    salary: number; // Change from string to number if it's numeric
}

export interface EmployeeState {
    [key: string]: Employee; // Map of employee ID to Employee object
}
