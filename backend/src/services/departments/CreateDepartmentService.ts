import { AppDataSource } from "../../data-source"
import { Department } from "../../entities"

type DepartmentRequest = {
    name: string,
}

export class CreateDepartmentService {
    private departmentRepository = AppDataSource.getRepository(Department)
    async execute({
        name
    }: DepartmentRequest): Promise<Department> {
        const department = new Department()

        Object.assign(department, { name });

        await this.departmentRepository.save(department);
        return department;
    }
}