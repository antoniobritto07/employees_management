import { AppDataSource } from "../../data-source"
import { Department } from "../../entities"
import isUUIDv4 from "../../utils/verifyUuid"

type DepartmentUpdateRequest = {
    id: string,
    name: string,
}

export class UpdateDepartmentService {
    private departmentRepository = AppDataSource.getRepository(Department)
    async execute({
        id,
        name
    }: DepartmentUpdateRequest) {
        if (!isUUIDv4(id)) {
            return new Error("Employee id informed is not valid")
        }

        const department = await this.departmentRepository.findOne({
            where: {
                id: id
            }
        });

        if (!department) {
            return new Error("Department informed does not exist")
        }

        Object.assign(department, { name: name ?? department.name });

        await this.departmentRepository.save(department);
        return department;
    }
}