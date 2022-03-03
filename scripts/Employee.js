import { getEmployees } from "./database.js"
import { EmployeeFirstName } from "./EmployeeFirstName.js"
import { EmployeeLastName } from "./EmployeeLastName.js"

export const Employee = (order) => {
    const employees = getEmployees()

    const foundEmployee = null
    const orderEmployee = employees.find(e => e.id === order.employeeId)

    return `${EmployeeFirstName(foundEmployee)} ${EmployeeLastName(foundEmployee)}`
}