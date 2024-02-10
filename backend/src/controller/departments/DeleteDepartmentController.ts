import { Request, Response } from "express";
import { DeleteDepartmentService } from "../../services/departments";

export class DeleteDepartmentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteDepartmentService();

        const result: any = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).end();
    }
}