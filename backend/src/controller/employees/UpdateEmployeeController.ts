import { Request, Response } from "express";
import { UpdateEmployeeService } from "../../services/employees";

export class UpdateEmployeeController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const {
            firstName,
            lastName,
            hireDate,
            department,
            phone,
            address,
            status
        } = request.body;

        const service = new UpdateEmployeeService();

        const result: any = await service.execute({
            id,
            firstName,
            lastName,
            hireDate,
            department,
            phone,
            address,
            status
        });

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}