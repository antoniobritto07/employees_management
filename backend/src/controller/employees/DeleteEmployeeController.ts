import { Request, Response } from "express";
import { DeleteEmployeeService } from "../../services/employees";

export class DeleteEmployeeController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteEmployeeService();

        const result: any = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).end();
    }
}