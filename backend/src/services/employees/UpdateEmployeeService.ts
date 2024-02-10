import { AppDataSource } from "../../data-source"
import { Employee } from "../../entities"
import isUUIDv4 from "../../utils/verifyUuid"

type EmployeeUpdateRequest = {
    id,
    firstName: string,
    lastName: string,
    hireDate: Date,
    department: string,
    phone: number,
    address: string,
    status: boolean
}

export class UpdateEmployeeService {
    private employeeRepository = AppDataSource.getRepository(Employee)
    async execute({
        id,
        firstName,
        lastName,
        hireDate,
        department,
        phone,
        address,
        status
    }: EmployeeUpdateRequest) {
        if (!isUUIDv4(id)) {
            return new Error("Employee id informed is not valid")
        }

        const employee = await this.employeeRepository.findOne({
            where: {
                id: id
            }
        });

        if (!employee) {
            return new Error("Employee informed does not exist")
        }

        Object.assign(employee, {
            firstName: firstName ?? employee.firstName,
            lastName: lastName ?? employee.lastName,
            hireDate: hireDate ?? employee.hireDate,
            department: department ?? employee.department,
            phone: phone ?? employee.phone,
            address: address ?? employee.address,
            status: status ?? employee.status,
        });

        await this.employeeRepository.save(employee);
        return employee;
    }
}