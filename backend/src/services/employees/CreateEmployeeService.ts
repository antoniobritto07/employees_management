import { AppDataSource } from "../../data-source"
import { Employee } from "../../entities"

type EmployeeCreateRequest = {
    firstName: string,
    lastName: string,
    hireDate: Date,
    department: string,
    phone: number,
    address: string,
    status: boolean
}

export class CreateEmployeeService {
    private employeeRepository = AppDataSource.getRepository(Employee)
    async execute({
        firstName,
        lastName,
        hireDate,
        department,
        phone,
        address,
        status
    }: EmployeeCreateRequest): Promise<Employee> {
        const employee = new Employee()

        Object.assign(employee, {
            firstName,
            lastName,
            hireDate,
            department,
            phone,
            address,
            status
        });

        await this.employeeRepository.save(employee);
        return employee
    }
}