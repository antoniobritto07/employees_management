import { AppDataSource } from "../../data-source"
import { Employee } from "../../entities"
import isUUIDv4 from "../../utils/verifyUuid"

export class GetByIdEmployeeService {
    private employeeRepository = AppDataSource.getRepository(Employee)
    async execute(id: string) {
        if (!isUUIDv4(id)) {
            return new Error("Employee id informed is not valid")
        }

        const employee = await this.employeeRepository.findOne({
            where: {
                id: id
            },
            relations: ["department"]
        });

        if (!employee) {
            return new Error("Employee informed does not exist")
        }

        return employee;
    }
}