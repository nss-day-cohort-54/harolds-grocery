import { getEmployees } from "./database.js"

export const EmployeeLastName = (employee) => {
    return employee.last_name
}