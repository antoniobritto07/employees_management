import { Request, Response } from "express";
import { GetByIdEmployeeService } from "../../services/employees";

export class GetByIdEmployeeController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new GetByIdEmployeeService();

        const result: any = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}