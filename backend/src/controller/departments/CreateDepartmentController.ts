import { Request, Response } from "express";
import { CreateDepartmentService } from "../../services/departments";

export class CreateDepartmentController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const service = new CreateDepartmentService();

        const department = await service.execute({ name });

        return response.json(department);
    }
}