import { Request, Response } from "express";
import { UpdateDepartmentService } from "../../services/departments";

export class UpdateDepartmentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name } = request.body;

        const service = new UpdateDepartmentService();

        const result: any = await service.execute({ id, name });

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}