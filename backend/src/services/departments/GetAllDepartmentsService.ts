import { AppDataSource } from "../../data-source"
import { Department } from "../../entities"

export class GetAllDepartmentsService {
    private departmentRepository = AppDataSource.getRepository(Department)
    async execute() {

        const departments = await this.departmentRepository.find();

        return departments;
    }
}