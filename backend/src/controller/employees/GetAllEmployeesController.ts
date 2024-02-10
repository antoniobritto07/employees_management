import { Request, Response } from "express";
import { GetAllEmployeesService } from "../../services/employees";

export class GetAllEmployeesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllEmployeesService();

        const employees = await service.execute();

        return response.json(employees);
    }
}