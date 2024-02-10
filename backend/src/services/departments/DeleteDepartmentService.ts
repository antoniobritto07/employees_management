import { AppDataSource } from "../../data-source"
import { Department } from "../../entities"
import isUUIDv4 from "../../utils/verifyUuid";

export class DeleteDepartmentService {
    private departmentRepository = AppDataSource.getRepository(Department)
    async execute(id: string) {
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

        await this.departmentRepository.delete(id);
    }
}