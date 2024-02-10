import { AppDataSource } from "../../data-source"
import { Employee } from "../../entities"

export class GetAllEmployeesService {
    private employeeRepository = AppDataSource.getRepository(Employee)
    async execute() {

        const employees = await this.employeeRepository.find({
            relations: ["department"]
        });

        return employees;
    }
}