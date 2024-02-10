import { Request, Response } from "express";
import { CreateEmployeeService } from "../../services/employees";

export class CreateEmployeeController {
    async handle(request: Request, response: Response) {
        const {
            firstName,
            lastName,
            hireDate,
            department,
            phone,
            address,
            status
        } = request.body;

        const service = new CreateEmployeeService();

        const employee = await service.execute({
            firstName,
            lastName,
            hireDate,
            department,
            phone,
            address,
            status
        });

        return response.json(employee);
    }
}