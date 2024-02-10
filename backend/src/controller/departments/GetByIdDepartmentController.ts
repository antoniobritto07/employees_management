import { Request, Response } from "express";
import { GetByIdDepartmentService } from "../../services/departments";

export class GetByIdDepartmentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new GetByIdDepartmentService();

        const result: any = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}